// History Component.
import React from 'react';
import Section from '../../shared/components/Section'
import './History.css';

var body = (
  <React.Fragment>
    <div className="historyDiv">
      <p className="historyText">"Sed ut perspiciatis unde omnis iste
      natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
      et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
      ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
      nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
      velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      <img className="historyImg" src="https://images.unsplash.com/photo-1584223761237-6f4effc4c0e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Rural Water Services" title="Rural Water"></img>
    </div>
    <div className="historyTxtCont">
      <img className="historyImg2" src="https://images.unsplash.com/photo-1584223761237-6f4effc4c0e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Rural Water Services" title="Rural Water"></img>
      <p className="historyText">"Sed ut perspiciatis unde omnis iste
      natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
      et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
      ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
      nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
      velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
    </div>
  </React.Fragment>
)

function History() {
  return (
    <React.Fragment>
      <Section title="History" body={body} />
    </React.Fragment>
  )
}

export default History;