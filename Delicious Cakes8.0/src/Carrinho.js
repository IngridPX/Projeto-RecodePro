import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ShoppingCart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) =>
    state.cart.filter((item) => item.qty > 0)
  );

 const totalQty = useSelector((state) =>
    state.cart.reduce((acc, cur) => acc + cur.qty, 0)
  );

const totalPreco = useSelector((state) =>
    state.cart.reduce((acc, cur) => acc + cur.preco * cur.qty, 0)
  );

  return (
    <div style={panelStyle}>
      <h3>
        Carrinho de Compras({totalQty})
        <button class="btn btn-default" onClick={() => dispatch({ type: 'limpaCarrinho' })}>
          Limpar
        </button>
      </h3>

      <br/>
      
      <br/>

      <table>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td style={{ width: '180px' }}>{item.nome}</td>
              <td style={{ width: '100px' }}>
                R$ {(item.preco * item.qty).toFixed(2)}
              </td>
              <td style={{ width: '80px', textAlign: 'center' }}>
                <button
                  onClick={() =>
                    dispatch({ type: 'removeProduto', id: item.id })
                  }
                >
                  -
                </button>

                {item.qty}

                <button
                  onClick={() => dispatch({ type: 'adicionaProduto', id: item.id })}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br/>
      <hr/>
      <br/>

      <h4>Total: R$ {totalPreco.toFixed(2)}</h4>
    </div>
  );
}

const panelStyle = {
  height: '100vh',
  width: '50vw',
};


