import React, { useState } from 'react';
import Content from '@/components/Content';
import TextArea from '@/components/TextArea';
import Radio from '@/components/Radio';
import Select from '@/components/Select';
import Checkbox from '@/components/Checkbox';
import StarReview from '@/components/StarReview';

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

const itemsStars= [... new Array(5).keys()];

export default function Form() {

  const [activeStar, setActiveStar] = useState();

  const onClickStar = (index) => {
    setActiveStar((oldState) => (oldState === index ? undefined : index));
  }

  return(
    <div className='bg-white p-8 h-full max-h-lvh'>
      {json.itens.map(({typeQuestion, content,...rest}, index) => {
        return (
          <div key={index}>
            {content && <Content>{content}</Content>}

            {typeQuestion === 1 && 
              itemsStars.map((index) => (
                <StarReview {...rest} key={index} isActive={index <= activeStar} onClick={() => onClickStar(index)} />)
            )}

            {typeQuestion === 3 && <TextArea key={index} />}
            {typeQuestion === 4 && <Select content={content} {...rest} key={index} />}
            {typeQuestion === 5 && <Radio {...rest} key={index} />}
            {typeQuestion === 6 && <Checkbox {...rest} key={index} />}
            <br/><br/>
          </div>
        )
      })}
    </div>
  )
}