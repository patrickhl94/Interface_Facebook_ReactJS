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
        content: "Lorem ipsum dolor sit amet?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diogo Mauro",
              avatar: "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg"
            },
            content: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae omnis unde, distinctio vel, adipisci voluptatum porro, laudantium ipsam doloremque nostrum accusa lor sit, amet consectetur adipisicing elit. Recusandae omnis unde, distinctio vel, adipisci voluptatum porro, laudantium ipsam doloremque nostrum accusa ntium tempora quibusdam beatae sapiente! `
          },
          {
            id: 2,
            author: {
              name: "Maria Silva",
              avatar: "https://cdn.pixabay.com/photo/2016/11/22/21/42/adult-1850703_960_720.jpg"
            },
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, illum.`
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Marcia July",
          avatar: "https://cdn.pixabay.com/photo/2015/11/07/11/01/couple-1030744__340.jpg"
        },
        date: "04 Dez 2019",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commodi nisi. Neque, dicta! Nemo iusto similique placeat explicabo dignissimos ipsum! ",
        comments: [
          {
            id: 2,
            author: {
              name: "Joseph Albert",
              avatar: "https://cdn.pixabay.com/photo/2015/07/20/12/57/man-852766__340.jpg"
            },
            content: " Lorem ipsum dolor sit amet. "
          },
          {
            id: 3,
            author: {
              name: "Patrick Lima",
              avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEwyxQOwroplQ/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=DCZjXc_BYMgHNoog4Syf9v82GEp1Lgi9uAylocs-iNM"
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae in consequatur sed quas rerum nemo magni illo! Numquam dignissimos error nemo ullam quia sapiente, consequatur autem recusandae obcaecati, est laboriosam dolorem sint! Nam. "
          },
          {
            id: 4,
            author: {
              name: "Mauro Vilas Lima",
              avatar: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg"
            },
            content: "Lorem ipsum dolor sit error nemo ullam quia sapiente, consequatur autem recusandae obcaecati, est laboriosam dolorem sint! Nam. "
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Hamed Homawa",
          avatar: "https://cdn.pixabay.com/photo/2015/01/27/09/58/human-613601__340.jpg"
        },
        date: "04 Fev 2020",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae? ",
        comments: [
          {
            id: 2,
            author: {
              name: "Algusto Joilton",
              avatar: "https://cdn.pixabay.com/photo/2014/09/25/23/36/man-461195_960_720.jpg"
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquid saepe quod provident perferendis, possimus laudantium odio ullam facere sequi voluptatibus delectus dignissimos accusantium quidem alias voluptas dolor. Itaque commodi unde officiis, pariatur explicabo sequi et quia, totam eius alias suscipit labore recusandae ratione, facere nesciunt ullam deserunt quis? Reiciendis, ea qui minus consectetur iste magnam rem repellendus pariatur, ipsum iure, aut perspiciatis non explicabo. ."
          },
          {
            id: 3,
            author: {
              name: "Dolirew Holse",
              avatar: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg"
            },
            content: "Calma meu amor, não precisa ter pressa para pagar as minhas contas, logo logo vc paga tudo."
          }
        ]
      },

    ]
  }

  render() {

    return (
      <div className="container-list">

      {
        this.state.posts.map(post => (
          <Post key={post.id} data={post}/>
        ))
      }
  
      </div>
    )
  }

}

export default PostList;