
export class Person {
    imageId = ""
    name = ""
    chatId = ""
    size = 0

    Person(new_name, new_imageId, new_size, new_chat_id) {
        this.imageId = new_imageId
        this.name = new_name    
        this.chatId = new_chat_id
        this.size = new_size
    }

    post(server, message) {
        //posting code heres
    }
}

function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      '.jpg'
    );
  }
  

export function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person, person.size)}
        alt={person.name}
        width={person.size}
        height={person.size}
      />
    );
}