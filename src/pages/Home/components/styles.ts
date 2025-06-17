import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const TextContent = styled.View`
  gap: 4px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 16px;
`;

export const AddProductButton = styled.TouchableOpacity<{
  disabledStyle?: boolean;
}>(({disabledStyle}) => ({
  backgroundColor: '#007bff',
  padding: 4,
  borderRadius: 4,
  opacity: disabledStyle ? 0.5 : 1,
}));
