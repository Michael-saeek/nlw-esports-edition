# Aula 5.  NLW Sport-edition

1. Criação de componentes
    - CreateAdBanner.tsx

    - CreateAdModal.tsx

2. Deixar o Dialog.root como pai destes componentes anteriormente criados.

3. Instalar desde radix-ui o componente de checkbox

`npm install @radix-ui/react-checkbox`
 - Ver como funciona a sintax do radix/ui
4. Incluir este checkbox no modal-form e estilizar com css
5. Incluir o icone desde a libreria de phosphor-icones do check

    `npm install --save phosphor-react`

    ```usage: import { Check } from "phosphor-react";```
    
    `<Check />`

    - Aproveitar e colocar o icone, que esqueci 
    `<Controller />`

6. No form, especificamente no primeiro input "Qual é o game" estabelecer este como um ``<select>`` e depois ``<option>``
7. Instalar e obter o componente select **desafio**
    - Ler a sintaxis para o uso
`npm install @radix-ui/react-select`
8. Desde o componente este select-option consumir uma api para trazer uma listagem de jogos, o ideal seria trazer a mesma listagem que esta sendo utilizada em nosso backend 
    ```
    { games.map((game) => {
        return <option key, value>{game.title}</option>
    })}
    ```
9. Instalação do "toggle-group" e importar

`npm install @radix-ui/react-toggle-group`

10. O objetivo deste componente é que o usuario consiga seleccionar varios dias de forma simultanea, no caso isto estaria no comp formulario

    - Para saber qual é nosso item que se encontra ativo, o radix ele utiliza um atributo "data-state" que indica isto, desta forma podemos estilizar o html: `onValueChange={}`

    - _Dica sobre **radix**: Por baixo dos panos o radix ele cria uma variavel-estado proprio que marca quando esta seleccionando um elemento_

11. Criar um useState para os elementos seleccionados no toggleGroup para saber quais são os dias da semana seleccionados.

12. Adicionar estilização sobre cada elemento seleccionado no toggleGroup 

`weekDays.includes('0') ? bg-violet-500`

---

1. Já terminando a parte visual do modal é necessario pegar todos os dados do formulario e fazer um submit para envia-los ao nosso API e conseguir criar um novo anuncio

2. Criação da ``function handleCreateAd()``
    - _**Dica:** Os forms nativos de html eles tem um comportamento por padrão, ao momento de realizar um submit eles tentar redireccionar para outro endPoint e para prevenir faremos o seguinte:_

    ```
     function handleCreateAd(event: FormEvent) {
        event.preventDefault();
     }
    ```

3. Como pegamos os campos que estamos enviando desde o formulario? 
     
    ``` 
    _FormData é um objeto nativo de JS_
    const formData = new FormData(event.target as HTMLFormElement )
      _Estamos forçando e dissendo que nosso target é o formulario_

    const data = Object.fromEntries(formData)

    console.log(data)
    console.log(weekDays)

  
    ```

    - _Dica importante quando trabalhamos con formulario, é importante colocar **name** nos campos, com eles conseguimos pegar os dados no momento de efetuar um submit_

4. Incluir um useState para o voiceChannel definido como default por padrão e aplicar a logica se este é true.

5. Instalação de axios para efetuar submisão de formularios, sendo que não é tão verbosa como o fetch()

6.  Na função de submit incluir no final efetuar a requisição POST

    ```
    axios.post(`backend/games${data.game.id}/ads`, {
        objeto a enviar
    })

    ```

7. _Dicas para elevar ao proximo nivel_
    - Melhorar a navegação com react-router-dom para ver os anuncios em geral de cada jogo
    - Responsividade
    - Keen slider biblioteca para implementar carrousel, em caso de ter muitos jogos
    - Fazer validação do envio de formulario, indicação: react-hook-form
    - Colocar algum tipo de auth: twich ou discord


---
# Aula 5. Versão mobile

1. Criar o modal que mostra o discord do anuncio
     - Criar um componente `<Duomatch/> `
     - Criar a tipagem interface Props
     - Neste componente usaremos o  { Modal } por volta do View

2. Adaptar a cor de fundo do modal e colocar esta como transparente

```
<Modal 
    transparent={true}

 container: {
    backgroundColor: THEME.COLORS.OVERLAY
  },

```

3. Implementar o visual do content no modal.

4. Colocar o icone "X" dentro como um ```<TouchabbleOpacity> <Icon/> </TouchabbleOpacity>``

5. Implementar uma nova função que faça uma requisição ao servidor e traga pelo id do anuncio o discord e consiga mostrar no modal

6. Adicionar animações no react-native
    `animationType='fade'`

7. Copiar o usuario de discord desde o button do aplicativo para o area de transferencia do usuario.
    - Para isto é utilizada uma biblioteca chamada 
    ` clipboard`
    ` expo install expo-clipboard`

8. Ver como é feita a importação no projeto e como utilizar

9. Adicionar um Alert desde react-native para notificar ao usuario quando for copiado o discord-user

10. Criar um estado que previna não clickar e usar esta function varias vezes sendo que pode afetar o rendimento da memoria do celular

11. Criação de pasta services/notificationConfigs.ts 

    - É necessario instalar 

    `npx expo install expo-notifications`

```
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({   
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

```

    - Importar isto no app principal index.tsx
    - é importante estar logando para poder usar o serviço de notificação de expo

12. Expo dev notifications 




