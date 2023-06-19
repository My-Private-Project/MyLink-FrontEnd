import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Card, Icons, Space } from "./style";

export function StyleCard({name, key, link, card, updateCard, deleteCard}) {
    return (
          <Card key={key}>
            <a href={link}>
              {name}
            </a>
            <Icons>
              <FaPencilAlt size={'sm'} cursor={'pointer'} onClick={() => updateCard(card.id)}/>
              <Space/>
              <FaTrash size={'sm'} cursor={'pointer'} onClick={() => deleteCard(card.id)}/>
            </Icons>
          </Card>
    );
};
