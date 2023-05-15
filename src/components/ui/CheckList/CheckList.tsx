import {CheckListItem} from "./CheckListItem"
import { IChecklistItemProps } from "../../../types"

interface IProps {
    items: IChecklistItemProps[]
}

const CheckList: React.FC<IProps> = ({items}) => {
  return (
    <>
        {
            items.length ? 
                <ul className="space-y-2">
                    {items.map((item, index) => <CheckListItem key={`${index}${item.text}`} {...item}/>)}
                </ul>

            :
                "No CheckList Items"
        }
    </>
  );
}

export default CheckList;