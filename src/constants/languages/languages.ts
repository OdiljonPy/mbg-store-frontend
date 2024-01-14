import {
    ILanguage,
    ILanguagePointer,
    ILanguagesIcons,
    Languages
} from "@/layout/components/header/main-header/data-types/languages";
import uz from '../../../public/images/icons/flags/uz.svg'
import ru from '../../../public/images/icons/flags/ru.svg'

export const languages: ILanguage[] = [{
    code: 'uz',
    title: 'O’zbekcha'
}, {
    code: 'ru',
    title: "Русский"
}]


export const languagesIcons: ILanguagesIcons = {
    uz: uz,
    ru: ru
}


export const languagesObj: ILanguagePointer = {
    uz: 'O’zbekcha',
    ru: 'Русский'
}