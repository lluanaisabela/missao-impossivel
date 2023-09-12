

export const Card = (props) => {

  return (
    <div
    onClick={()=> props.onClick()}
      style={{
        backgroundColor: '#303030',
        padding: 20,
        margin: 20,
        borderRadius: 8,
        width: 200,
        cursor: 'pointer'
      }}
    >
      <img src={props.imagem} width='100%' />
      <h2
        style={{
          marginTop: 10,
          textAlign: 'center'
        }}
      >Missão impossivel 2</h2>
    </div>
  )
}
