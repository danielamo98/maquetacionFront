import Item from "./Item";

function AsideRight() {
  return (
    <aside className="right_aside">
       <div className="Container_fila1">
        <Item/>
       </div>
        <div className="Container_fila2">
            <Item/>
            <Item/>
        </div>

        <div className="Container_fila3">
            <Item/>
            <Item/>
            <Item/>
        </div>
      
    
    </aside>
  );
}

export default AsideRight;
