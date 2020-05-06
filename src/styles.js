import styled from "styled-components";

export const Header = styled.div`
  @media (max-width: 960px) {
    font-family: "Roboto", sans-serif;
    position: relative;
    img {
      width: 100% !important;
      opacity: 80%;
    }

    #usemascara {
      position: absolute;
      top: 10px;
      left: 15px;
      font-size: 24px;
      font-weight: 500;
    }
  }
`;

export const Container = styled.div`
  @media (max-width: 960px) {
    background-color: #f9f9f9;
    margin: 0 auto;
    width: 90%;
    
    border-radius: 4px;
    margin-top: 20px;
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 2px 2px 2px #ccc;
    .container-title {
      font-weight: 500;
      font-size: 18px;
      margin-top: 15px;
      color: #4b4b4b;
      margin-left: 5px;
    }

    ul {
      align-self: flex-start;
      margin-top: 10px;
      color: #969696;
      list-style: none;
      margin-left: 5px;
      li {
        margin-top: 10px;
      }
    }

    .preco {
      font-size: 36px;
      font-weight: bold;
      color: #e02041;
      margin-top: 30px;
      align-self: flex-start;
    }

    .carlone {
      font-family: "Jura", sans-serif;
      font-size: 32px;
      margin-top: 35px;
    }
  }
`;

export const Picture = styled.div`
  @media (max-width: 960px) {
    display: flex;
    justify-content: center;
    padding: 10px;
    img {
      width: 300px;
      height: 278px;
      border-radius: 4px;
      margin-top: 20px;

      box-shadow: 0px 2px 2px 2px #ccc;
    }
  }
`;

export const Vendedores = styled.div`
  background: #e9e9e9;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 50px;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding: 30px;

    .vendedor {
      background: #fff;
      width: 300px;
      border-radius: 4px;
      padding: 20px;
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 1px 1px 4px 2px #ccc;
      img {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        box-shadow: 1px 1px 4px 2px #4b4b4b;
      }

      .nomeVendedor {
        font-size: 36px;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #4b4b4b;
      }

      .vendenasregioes {
        font-size: 24px;
        font-weight: 400;
        align-self: flex-start;
        color: #4b4b4b;
      }

      .regioes {
        color: #969696;
        align-self: flex-start;
        margin-top: 10px;
      }

      .contato {
        align-self: flex-start;
        margin: 10px 0 10px 0;
        font-size: 24px;
        color: #4b4b4b;
      }

      .whatsapp {
        align-self: flex-start;
        color: #969696;
        display: flex;
        justify-content: space-between;
        align-items: center;
        svg {
          margin-right: 5px;
        }

        a {
          color: #e02041;
          text-decoration: none;
          cursor: pointer;
        }
      }

      .email {
        align-self: flex-start;
        margin-top: 10px;
        color: #969696;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        svg {
          margin-right: 5px;
        }

        a {
          color: #e02041;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  }
`;

export const Footer = styled.footer`

  display: flex;
  height: 100px;
  width: 100%;
  background: #424144;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .footer {
    color: #fff;
  }

`