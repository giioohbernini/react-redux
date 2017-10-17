import React from 'react'
import { push  } from 'react-router-redux'
import { bindActionCreators  } from 'redux'
import { connect  } from 'react-redux'
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from '../../modules/counter'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
    <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
    <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
    <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
    <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps, // aqui ele passa para como pegar parte do estado e jogar dentro da props do component
  mapDispatchToProps // aqui ele passa como passar os actionscreators(metodos) para dentro da props do componente
)(Home)// decorator é o nome desse método usado com o connect()
