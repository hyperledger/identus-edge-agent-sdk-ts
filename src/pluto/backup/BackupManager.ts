import * as Domain from "../../domain";
import * as Versions from "./versions";
import { Pluto } from "../Pluto";
import { PlutoRepositories } from "../repositories";
import { isEmpty } from "../../utils";
import { IBackupTask, IRestoreTask } from "./versions/interfaces";
import { Version } from "../../domain/backup";

/**
 * BackupManager
 * handle the different versions of backup and restore
 */
export class BackupManager {
  constructor(
    private readonly Pluto: Pluto,
    private readonly Repositories: PlutoRepositories
  ) {}

  /**
   * convert stored data to JSON
   * 
   * @param version - backup schema version
   * @returns {Promise<Domain.Backup.Schema>}
   */
  backup(version?: Version) {
    const task = this.getBackupTask(version);
    return task.run();
  }

  /**
   * convert JSON to stored data
   * 
   * @param backup 
   */
  async restore(backup: Domain.Backup.Schema) {
    await this.assertStoreIsEmpty();
    const task = this.getRestoreTask(backup);
    await task.run();
  }

  private getBackupTask(version: Version = Domain.Backup.defaultVersion): IBackupTask {
    switch (version) {
      case "0.0.1":
        return new Versions.v0_0_1.BackupTask(this.Pluto, this.Repositories);
    }

    throw new Domain.PlutoError.BackupNotFoundError();
  }

  private getRestoreTask(backup: Domain.Backup.Schema): IRestoreTask {
    const version = backup.version ?? Domain.Backup.defaultVersion;
    switch (version) {
      case "0.0.1":
        return new Versions.v0_0_1.RestoreTask(this.Pluto, backup);
    }

    throw new Domain.PlutoError.RestoreNotFoundError();
  }

  private async assertStoreIsEmpty() {
    const credentials = await this.Repositories.Credentials.getModels();
    const dids = await this.Repositories.DIDs.getModels();
    const keys = await this.Repositories.Keys.getModels();
    const link_secret = await this.Repositories.LinkSecrets.getModels();
    const messages = await this.Repositories.Messages.getModels();

    if (
      isEmpty(credentials) &&
      isEmpty(dids) &&
      isEmpty(keys) &&
      isEmpty(link_secret) &&
      isEmpty(messages)
    ) {
      return true;
    }

    throw new Domain.PlutoError.StoreNotEmptyError();
  }
}
