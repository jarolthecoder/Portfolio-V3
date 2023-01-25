
const AOSElement = ( props ) => {
  return (
    <div
      {...props} data-aos={props.aos || "fade-up"} 
      data-aos-duration={props.duration || "900"} 
      data-aos-delay={props.delay || "0"} 
      data-aos-once={props.once || "false"}
      style={{width: "100%"}}>
      {props.children}
    </div>
  )
}

export default AOSElement
