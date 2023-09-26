import Modal from 'react-modal';
import { Text, Topic, Wrapper } from './QuizCard.styled';
import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class QuizCard extends Component {

  state = {
    isModalOpen: false,
  };

  openModal =()=> this.setState ({isModalOpen: true}) ;

closeModal =()=>  this.setState({ isModalOpen: false });

  
  render() {
    const {
      item: { id, topic, level, time, questions },
      onClick,
    } = this.props;
   return (
     <Wrapper>
       <Topic onClick={this.openModal}>{topic}</Topic>
       <Text>
         <b>Level:</b> {level}
       </Text>
       <p>
         <b>Time:</b> {time} min
       </p>
       <p>
         <b>Questions:</b> {questions}
       </p>
       <div>
         <button onClick={() => onClick(id)}>Delete</button>
         {/* <button onClick={onClick}>Delete</button> */}
       </div>

       <Modal
         isOpen={this.state.isModalOpen}
         onRequestClose={this.closeModal}
         style={customStyles}
                >
         <h1>{topic}</h1>
         <button onClick={this.closeModal}>close</button>
       </Modal>
     </Wrapper>
   );
}

 }

