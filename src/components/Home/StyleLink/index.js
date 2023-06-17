import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link, Icons, Space } from "./style";

export function StyleLink({name, key, link, active, updateLink, deleteLink}) {
    return (
          <Link key={key}>
            <p onClick={active}>{name}</p>
            <Icons>
              <FaPencilAlt cursor={'pointer'} onClick={() => updateLink(link.id)}/>
              <Space/>
              <FaTrash size={'sm'} cursor={'pointer'} onClick={() => deleteLink(link.id)}/>
            </Icons>
          </Link>
    );
};
