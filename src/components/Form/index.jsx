import React from 'react';

const json = {
  "itens":[
      {
          "typeQuestion":1,
          "answerValue":5,
          "mandatory":true,
          "content":"Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário"
      },
      {
          "typeQuestion":2,
          "answerValue":9,
          "mandatory":true,
          "content":"Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário"
      },
      {
          "typeQuestion":3,
          "mandatory":false,
          "content":"Descreva o motivo de sua avaliação"
      },
      {
          "typeQuestion":4,   
          "content":"Qual loja você frequenta?",
          "mandatory":true,
          "itens": [
              {
                  "value":0,
                  "description":"Opção 1"
              },
              {
                  "value":1,
                  "description":"Opção 2"
              },
              {
                  "value":2,
                  "description":"Opção 3"
              }
          ]
      },
      {
          "typeQuestion":5,   
          "content":"Pergunta de escolha única?",
          "mandatory":true,
    "answerValue": 1,
           "itens": [
              {
                  "value":0,
                  "description":"Sim"
              },
              {
                  "value":1,
                  "description":"Não"
              }              
          ]
      },
       {
          "typeQuestion":6,   
          "horizontal":true,
          "content":"Pergunta de múltipla escolha?",
          "mandatory":true,
           "itens": [
              {
                  "value":0,
                  "description":"Opção 1"
              },
              {
                  "value":1,
                  "description":"Opção 2"
              },
              {
                  "value":2,
                  "description":"Opção 3"
              },
              {
                  "value":3,
                  "description":"Opção 4"
              }
          ]
      },
       {
          "typeQuestion":6,   
          "horizontal":false,
          "mandatory":true,
          "content":"Pergunta de múltipla escolha?",
           "itens": [
              {
                  "value":0,
                  "description":"Opção 1"
              },
              {
                  "value":1,
                  "description":"Opção 2"
              },
              {
                  "value":2,
                  "description":"Opção 3"
              }             
          ]
      },
      {
          "typeQuestion":3,
          "answerValue":"Exemplo de resposta",
          "mandatory":false,
          "content":"Pergunta de texto?"
      }
  ],
  "error":"",
  "warning":""
}

const Content = ({children}) => (
  <p>{children}</p>
)

const TextArea = () => (
  <textarea type="text"></textarea>
)

const Stars = ({answerValue}) => (
  <div>
    <button>star1</button>
    <button>star2</button>
    <button>star3</button>
    <button>star4</button>
    <button>star5</button>
    <input type="text" value={answerValue} />
  </div>
)

const Radio = ({itens}) => (
  <div>
    {itens.map(({value, description}) => (
      <>
        <input type="radio"  name="fav_language" value={value} />
        <label>{description}</label>
      </>
    ))}
  </div>
)

const Checkbox = ({itens}) => (
  <div>
    {itens.map(({value, description}) => (
      <>
        <input type="checkbox"  name="fav_languagecheckbox" value={value} />
        <label>{description}</label>
      </>
    ))}
  </div>
)

const Select = ({content, itens}) => (
  <select name="select">
    <option selected>{content}</option>
    {itens.map(() => (
      <option value="valor3">Valor 3</option>
    ))}
  </select>
)

export default function Form() {
  return(
    <div>
      {json.itens.map(({typeQuestion, content,...rest}) => {
        return (
          <>
            {content && <Content>{content}</Content>}
            {typeQuestion === 1 && <Stars {...rest} />}
            {typeQuestion === 3 && <TextArea />}
            {typeQuestion === 4 && <Select content={content} {...rest} />}
            {typeQuestion === 5 && <Radio {...rest} />}
            {typeQuestion === 6 && <Checkbox {...rest} />}
            <br/><br/>
          </>
        )
      })}
    </div>
  )
}