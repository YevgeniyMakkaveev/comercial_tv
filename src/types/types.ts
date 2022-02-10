import windowEnum from "./enum";
interface IMainScreenComponent {
 setActiveWindow: React.Dispatch<React.SetStateAction<windowEnum>>
}
export interface IContactFormComponent {
 phone: string;
 isValid: boolean|null;
}

export default IMainScreenComponent;