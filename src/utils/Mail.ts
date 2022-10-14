const RenderMail = order => {
	return `<div style="
   padding: 15px;
   border-radius: 15px;
   border: 1px solid #222;
   ">
   <div>
      <img src="https://comprasalmargen.com.ar/img/almargen.png" width="150"/>
   </div>
   <div style="align-self:center">
      <h4 style="text-align:center;font-weight:400;">Tu Pedido Al Margen</h4>
      <small>${order.name} recibimos tu pedido desde nuestra web.</small>
      <table style="width:80%;margin-top:20px;margin-left:10%" cellpadding="3" cellspacing="0">
         <thead style="background-color:#f1f3f5;border-radius:15px;color:#7e868c;font-size:15px;">
            <tr>
               <th>Codigo</th>
               <th>Producto</th>
               <th>Cantidad</th>
               <th>Total</th>
            </tr>
         <thead>
         <tbody style="font-size:13px;color:#11181C;font-weigh:200;">
         ${order.products.map(
						product =>
							`<tr>
            <th>
               ${product.code}
            </th>
            <th>
               ${product.name}
            </th>
            <th>
               ${product.qty}
            </th>
            <th>
              $${product.total} 
            </th>
         </tr>`
					)}
         </tbody>
         <tfoot style="background-color:#f1f3f5;border-radius:15px;color:#7e868c;font-size:15px;">
            <tr>
               <th>Total</th>
               <th>
               <th>
               <th>$${order.total}</th>
            </tr>
         </tfoot>
      </table>
   </div>
   <div style="
   margin-top:15px;
   width:100%;
   ">
   <a href="https://comprasalmargen.com.ar" style="
   text-align:center;
   background-color: #ea903c;
   padding:15px;
   border:none;
   border-radius:15px;
   text-decoration:
   none;color:black;
   font-weight:600;
   display:block;
   ">Seguir Comprando</a><br>
   <p style="text-align:center;font-size:15px">Derechos reservados Al margen 2022 &copy;</p>
   </div>
   </div>`;
};

export default RenderMail;
