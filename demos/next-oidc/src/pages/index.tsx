import React, { useEffect } from "react";
import { Box } from "../app/Box";
import '../app/index.css'
import { useMountedApp } from "@/reducers/store";
import { PageHeader } from "@/components/PageHeader";
import { OIDC } from "@/components/OIDC";

const Agent: React.FC<{}> = props => {
  const app = useMountedApp();
  const { db, initAgent } = app;
  const [error] = React.useState<any>();
  useEffect(() => {
    if (!app.agent.instance && db.instance) {
      initAgent({ pluto: db.instance, defaultSeed: app.defaultSeed })
    }
  }, [app.agent, db]);

  return (
    <>
      <div className="mx-10 mt-5 mb-30">
        <Box>
          <PageHeader >
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              OIDC VCI
            </h1>
          </PageHeader>

          <OIDC
            clientId='alice-wallet'
            redirectUrl='http://localhost:3000/'
            issuerBaseUrl="http://localhost:8090/"
            issuerId="2526d9f0-07a5-40ab-a7c5-d9cefac29622"
            issuerDid="did:prism:8fd1c9454fe13c64ccbbae1783aa6255852106c96fe55be628c4d0b087844024"
            credentialConfigurationId='StudentProfile'
          />

          {error instanceof Error && (
            <pre>
              Error: {error.message}
            </pre>
          )}
        </Box>

      </div>
    </>

  );
};



export default Agent
