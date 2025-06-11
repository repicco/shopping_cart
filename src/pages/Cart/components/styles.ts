import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  gap: 8px;
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

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const AddProductButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 4px 4px;
  border-radius: 4px;
`;

export const RemoveProductButton = styled.TouchableOpacity`
  background-color: #dc3500;
  padding: 4px 4px;
  border-radius: 4px;
`;
