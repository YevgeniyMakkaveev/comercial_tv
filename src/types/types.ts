import windowEnum from "./enum";
interface IMainScreenComponent {
 setActiveWindow: React.Dispatch<React.SetStateAction<windowEnum>>
}
export default IMainScreenComponent;