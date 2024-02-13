export interface IFeedbackForm{
    rate: string
    name: string
    anonymus: boolean
    message: string
    images: Array<IFile>
}


export interface IFile {
    file: File
}