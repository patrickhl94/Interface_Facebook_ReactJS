import React, { Component } from 'react';

import Post from './Post';
import '../style/postList.css'

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Patrick Lima",
          avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEwyxQOwroplQ/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=DCZjXc_BYMgHNoog4Syf9v82GEp1Lgi9uAylocs-iNM"
        },
        date: "26 Mac 2020",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEQas5NMNHUYQ/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=vpsW319Tam9PaOlbcPb8J0jzVaal-qjDF_crIhvGbIE"
            },
            content: `Por enquanto não estamos contratando, mas há previsão
            de inicio das contratações para o inicio de Abril. Acompanhe nossas redes socias para mais informações`
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },

    ]
  }

  render() {

    return (
      <div className="container-list">
        <Post data={this.state.posts[0]} />
        <Post />
        <Post />
      </div>
    )
  }

}

export default PostList;