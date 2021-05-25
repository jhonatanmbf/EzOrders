import styled,{css} from 'styled-components/native'

export const List = styled.FlatList.attrs(()=>({
  contentContainerStyle: {
    paddingBottom: 80,
    paddingTop:32,
    paddingHorizontal: 16,
  }
}))`
  width: 100%;
`;

const cardStatusVariants = {
  PREPARING: css`background: #f6a609;`,
  DONE: css`background: #2ac769;`,
}

const cardTextStatusVariants = {
  PREPARING: css`color: #fff;`,
  DONE: css`color: #fff;`,
}

export const Card = styled.View`
  width: 100%;
  background: #fff;
  height: 55px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  padding: 0 16px;
  border-radius: 5px;
  margin-bottom: 16px;

  ${(props) =>cardStatusVariants[props.status] || null};
`;

export const TableNumber = styled.Text`
  font-weight:bold;
  font-size: 18px;
  color: #000;

  ${(props) =>cardTextStatusVariants[props.status] || null}
`;

export const Status = styled.Text`
  font-weight:bold;
  font-size: 16px;
  color: #000;

  ${(props) =>cardTextStatusVariants[props.status] || null}
`;