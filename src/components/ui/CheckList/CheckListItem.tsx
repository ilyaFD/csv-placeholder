import { IChecklistItemProps } from "../../../types"

const CheckedIcon: React.FC = () => <svg className="w-3 h-3 fill-current text-green-500 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
const ErrorIcon: React.FC = () => <svg className="w-3 h-3 fill-current text-red-500 flex-shrink-0"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  /></svg>
export const CheckListItem: React.FC<IChecklistItemProps> = ({
  text,
  active,
  error
}) => {
  return (
    <li className={`flex items-center ${active ? "" : "opacity-60"}`}>
        <div className="absolute">
          {active || error ? error ? <ErrorIcon /> : <CheckedIcon /> : null}
        </div>
        <span className="ml-4">{error ? `${text} (Error: ${error})` : text}</span>
    </li>
  );
}