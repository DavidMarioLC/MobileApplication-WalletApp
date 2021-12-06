import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  max-width: 330px;
  min-width: 300px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 10px;
`;

export const Button = styled.button`
  font: ${({ theme }) => theme.font.button};
  background: ${({ theme }) => theme.color.primary};
  padding: 0.5rem 0.5rem;
  color: #fff;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;

  &:focus-visible,
  &:hover {
    outline: 2px dashed ${({ theme }) => theme.color.primary};
    outline-offset: 4px;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Divider = styled.hr`
  margin: 1rem 0;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  font: ${({ theme }) => theme.font.body2Regular};
`;

export const Input = styled.input`
  font: ${({ theme }) => theme.font.body2Regular};
  padding: 0.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.secondary};

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primary10};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
