export class AssignmentInput {
    constructor (public assginName: string, public scored: number, public total: number) {}
}

export class AssignmentTableData {
    constructor (public assginName: string, public scored: number, public total: number, public percent: string) {}
}

export class PerformanceTableData {
    constructor (public scored: number, public total: number, public percent: string, public grade: string, public color: string) {}
}
