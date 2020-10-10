import os from 'os'

export enum Statuses {
    BUSY = 'BUSY',
    READY = 'READY'
}

export type CliStatus = Statuses.BUSY | Statuses.READY

export interface ClientInfo {
    uid: number
    gid: number
    shell: string
    osName: string
    tmpdir: string
    homedir: string
    username: string
    hostname: string
}

class Cli {
    readonly STATUS: CliStatus
    public CLIENT_INFO: ClientInfo
    constructor(){
        this.CLIENT_INFO = this.clientInfo()
        this.STATUS = Statuses.READY
    }
    private clientInfo(): ClientInfo {
        const userInfo = os.userInfo()
        return {
            ...userInfo,
            osName: os.type(),
            tmpdir: os.tmpdir(),
            hostname: os.hostname(),
        }
    }
    public soSomething(): void {
        console.log('Doing Something')
    }
}

export default Cli