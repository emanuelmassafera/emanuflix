import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 1px solid #D8FDDA;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  a:any-link {
    text-decoration:none;
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
