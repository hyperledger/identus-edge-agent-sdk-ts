import React, { useState, useEffect } from "react";
import '../app/index.css'
import { useMountedApp } from "@/reducers/store";
import { useRouter } from 'next/router'; // Import useRouter from Next.js

const Agent: React.FC<{}> = props => {
    const app = useMountedApp();
    const { db, initAgent } = app;
    const [error] = React.useState<any>();
    const router = useRouter(); // Use Next.js router

    // State for form fields
    const [studentName, setStudentName] = useState("Alice");
    const [studentId, setStudentId] = useState("12345");
    const [course, setCourse] = useState("Self sovereign identity Degree");
    const [grade, setGrade] = useState("A");
    const [issueDate, setIssueDate] = useState("2024-01-01");

    useEffect(() => {
        if (!app.agent.instance && db.instance) {
            initAgent({ pluto: db.instance, defaultSeed: app.defaultSeed })
        }
    }, [app.agent, db]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the credential issuance
        console.log("Issuing credential for:", { studentName, studentId, course, grade, issueDate });
        app.fetchOffer({
            issuerId: "2526d9f0-07a5-40ab-a7c5-d9cefac29622",
            issuerDid: "did:prism:8fd1c9454fe13c64ccbbae1783aa6255852106c96fe55be628c4d0b087844024",
            credentialConfigurationId: 'StudentProfile'
        })
    };

    if (app.agent.offer) {
        const offerParams = new URLSearchParams(app.agent.offer.split('?')[1]);
        router.push(`/?${offerParams.toString()}`);
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-4 py-12">
                <h1 className="mb-8 text-4xl font-bold tracking-tight leading-tight text-center md:text-5xl lg:text-6xl">
                    Student Certificate Issuer
                </h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-6">
                        <label htmlFor="studentName" className="block text-sm font-semibold mb-2">Student Name</label>
                        <input
                            type="text"
                            id="studentName"
                            value={studentName}

                            disabled
                            onChange={(e) => setStudentName(e.target.value)}
                            className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="studentId" className="block text-sm font-semibold mb-2">Student ID</label>
                        <input
                            type="text"
                            id="studentId"
                            value={studentId}

                            disabled
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="course" className="block text-sm font-semibold mb-2">Course</label>
                        <input
                            type="text"
                            id="course"
                            value={course}

                            disabled
                            onChange={(e) => setCourse(e.target.value)}
                            className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="grade" className="block text-sm font-semibold mb-2">Grade</label>
                        <input
                            type="text"
                            id="grade"
                            value={grade}

                            disabled
                            onChange={(e) => setGrade(e.target.value)}
                            className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="issueDate" className="block text-sm font-semibold mb-2">Issue Date</label>
                        <input
                            type="date"
                            id="issueDate"
                            value={issueDate}
                            disabled
                            onChange={(e) => setIssueDate(e.target.value)}
                            className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline"
                        >
                            Issue Certificate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Agent;