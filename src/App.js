import {useState, useEffect} from 'react';
import logo from './img/Asset_1-100.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineGitlab, AiFillLinkedin } from "react-icons/ai";
import { BiCodeBlock } from 'react-icons/bi';
import { DiPhp, DiMysql, DiTerminal } from 'react-icons/di';
import { ImCogs } from 'react-icons/im';
import { FaTools, FaJava, FaLaravel, FaReact, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaGit } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { SiMariadb, SiJavascript, SiVim, SiVisualstudiocode, SiArchlinux, SiAdobephotoshop, SiAdobexd, SiAdobepremiere, SiAdobeillustrator } from 'react-icons/si';
import emailjs from 'emailjs-com';



const NavBar=()=>{
  return (
        <Navbar fixed="top" expand="sm" className="navbar-dark navbar-bg" style={{maxHeight:"3rem"}}>
          <Navbar.Brand className="p-0" style={{height:"3rem"}} href="">
            <img src={logo} style={{height:"3rem", width: "auto"}} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-1 border-0"/>
          <Navbar.Collapse id="collapse1">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="collapse2">
            <Nav className="ml-auto d-flex justify-content-center">
              <Nav.Link target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/josé-gonçalves-7186181a2"><AiFillLinkedin color="white" size="2em" /></Nav.Link>
              <Nav.Link target="_blank" rel="noopener noreferrer" href="https://gitlab.com/anwellcoleman"><AiOutlineGitlab color="white" size="2em" /></Nav.Link>
              <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/vitorbarbosagoncalves"><GoMarkGithub color="white" size="2em" /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

  );
}

const Home=()=> {
  return (
    <div id="home" className="d-flex justify-content-center align-items-center" style={{widht:"100vh", height:"100vh"}}>
        <div className="text">
          <p> Hello! <br/>The name's <span style={{color:"#1F6FEB"}}>José Gonçalves</span><br/> and I'm a <span style={{color:"#ECC30B"}}>Junior Web Developer</span>.</p>
          
          <a className="btn btn-outline btn-outline-react mt-3" href="#about">About me</a>
        </div>
    </div>
  );
}

const About=()=>{
  return(
    <div id="about" className="container-fluid pt-5" >
      <div className="row justify-content-center my-5">
        <h3>ABOUT</h3>
      </div>
      <div className="row justify-content-center mb-5">
        <img src={logo} alt="logo" style={{maxWidth: "10rem"}} className="img-fluid"/>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 mx-auto mb-5">
          <p>
           I'm an aspiring <span style={{color:"#1f6feb"}}>Full Stack Web Developer</span>. Still in college but I feel confident in my skills to develop CRUD apps. 
          </p>
          <p>
            <span style={{color:"#FF2D20"}}>Laravel</span> is my go to framework and right now I'm learning <span style={{color:"#61DBFB"}}>React</span>.
          </p>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-xl-3 my-2 mx-5" style={{height:"inherit"}}>
          <div className="card text-center w-100" style={{backgroundColor:"#343a40", height: "100%"}}> 
            <div className="card-body">
              <h5 className="card-title"><ImCogs size="5rem"/></h5>
              <h6 className="card-subtitle mb-2">Back End</h6>
              <p className="card-text">
                Here's my specialty and what I like to do the most. Trying my best to make this list as large as possible.
                <br/><br/>
                <strong> 
                  Languages and Frameworks
                </strong>
                <div className="row justify-content-center pt-5">
                  <div className="col-xs-4 mx-3 mb-3"> <DiPhp alt="php" style={{fill:"#8892BF"}} size="5rem"/></div>
                  <div className="col-xs-4 mx-3 mb-3"> <FaLaravel alt="laravel" style={{fill:"#FF2D20"}} size="3rem"/></div>
                  <div className="col-xs-4 mx-3 mb-3"> <DiMysql style={{position: "absolute", fill:"#00758F"}} alt="MySQL" size="3rem" /><SiMariadb style={{}} alt="MariaDB" size="3rem" /></div>
                  <div className="col-xs-4 mx-3 mb-3"> <FaJava style={{fill:"#F58219"}} alt="Java" size="3rem" /></div>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 my-2 mx-5" style={{height:"inherit"}}>
          <div className="card text-center w-100" style={{backgroundColor:"#343a40", height: "100%"}}> 
            <div className="card-body">
              <h5 className="card-title"><BiCodeBlock size="5rem"/></h5>
              <h6 className="card-subtitle mb-2">Front End</h6>
              <p className="card-text">
                I'm no designer but I can turn your ideas into code, these are the languages I can use to make that possible 
                <br/><br/>
                <strong> 
                  Languages and Frameworks
                </strong>
                <div className="row justify-content-center pt-5">
                  <div className="col-xs-4 mx-3 mb-3"> <SiJavascript alt="javascript" style={{fill:"#F6DF23"}} size="3rem"/></div>
                  <div className="col-xs-4 mx-3 mb-3"> <FaReact alt="react" style={{fill:"#61DBFB"}} size="3rem"/></div>
                  <div className="col-xs-4 mx-3 mb-3"> <FaBootstrap alt="bootstrap" style={{fill:"#553B7D"}} size="3rem" /></div>
                  <div className="col-xs-4 mx-3 mb-3"> <FaHtml5 alt="html5" style={{fill:"#E44D26"}} size="3rem" /></div>
                  <div className="col-xs-4 mx-3 mb-3"> <FaCss3Alt alt="css" style={{fill:"#214CE5"}} size="3rem" /></div>
                  <div className="col-xs-4 mx-3 mb-3"> <FaSass alt="sass" style={{fill:"#CE679A"}} size="3rem" /></div>
                </div>
                <ul style={{listStyleType: "none"}} className="about-ul">
                  <li className="my-4"></li>
                  <li></li>
                  <li></li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-xl-3 my-2 mx-5" style={{height:"inherit"}}>
          <div className="card text-center w-100" style={{backgroundColor:"#343a40", height: "100%"}}> 
            <div className="card-body">
              <h5 className="card-title"><FaTools size="5rem"/></h5>
              <h6 className="card-subtitle mb-2">Tools</h6>
              <p className="card-text">
                These tools are always there for me when I'm working, I love 'em all.
                <br/><br/>
                <strong> 
                  Languages and Frameworks
                </strong>
                <div className="row justify-content-center pt-5">
                  <div className="col-xs-4 mx-3 mb-3"> <SiVim alt="vim" style={{fill:"#019833"}} size="3rem"/></div>
                  <div className="col-xs-4 mx-3 mb-3"> <FaGit alt="git" style={{fill:"#F15030"}} size="3rem" /></div>
                  <div className="col-xs-4 mx-3 mb-3"> <SiArchlinux alt="arch" style={{fill:"#1793D1"}} size="3rem"/></div>
                  <div className="col-xs-4 mx-3 mb-3"> <DiTerminal alt="terminal" style={{fill:"white"}} size="3rem" /></div>
                  {/*<div className="col-xs-4 mx-3 mb-3"> <SiVisualstudiocode alt="vscode" style={{fill:"#41AEF2"}} size="3rem" /></div>*/}
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 my-2 mx-5" style={{height:"inherit"}}>
          <div className="card text-center w-100" style={{backgroundColor:"#343a40", height: "100%"}}> 
            <div className="card-body">
              <h5 className="card-title"><FiMoreHorizontal size="5rem"/></h5>
              <h6 className="card-subtitle mb-2">Others</h6>
              <p className="card-text">
                Coding is not the only thing I can do, I also have some editing software up my sleeve.
                <br/><br/>
                <strong> 
                  Software
                </strong>
                <div className="row justify-content-center pt-5">
                  <div className="col-xs-4 mx-3 mb-3"> <SiAdobexd alt="vim" style={{fill:"#FF61F6"}} size="3rem"/></div>
                  <div className="col-xs-4 mx-3 mb-3"> <SiAdobepremiere alt="vim" style={{fill:"#E47CFF"}} size="3rem"/></div>
                  <div className="col-xs-4 mx-3 mb-3"> <SiAdobephotoshop alt="vim" style={{fill:"#347FBE"}} size="3rem"/></div>
                  <div className="col-xs-4 mx-3 mb-3"> <SiAdobeillustrator alt="vim" style={{fill:"#FF9A00"}} size="3rem"/></div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

const Projects=()=>{
  return(
    <div id="projects" className="container-fluid my-5 pt-5" >
      <div className="row justify-content-center my-5">
        <h3>Projects</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 my-5 mx-2 text-center" style={{height: "inherit"}}>
          <div className="card bg-dark" style={{height:"100%"}}>
            <img
              src="./img/planetiers_wallpaper.jpg"
              style={{objectFit: "cover", height: "100%"}}
              className="card-img my-auto"
              alt="planetiers"
            />
            <div className="card-img-overlay">
            </div>
          </div>
        <a className="btn btn-outline btn-outline-react will-hide mt-2" href="https://planetiers.com">Visit Website</a>
        </div>
        <div className="col-md-4 my-5 mx-2 text-center" style={{height: "inherit"}}>
          <div className="card p-5" style={{backgroundColor:"#5E2121", height:"100%"}}>
            <img
              src="./img/pettix.png"
              className="card-img my-auto"
              alt="pettix"
            />
            <div className="card-img-overlay">
            </div>
          </div>
          <a className="btn btn-outline btn-outline-react will-hide mt-2" href="https://github.com/vitorbarbosagoncalves/pettix">Visit Repository</a>
        </div>
      </div>
    </div>

  );
}

const Contact=(props)=>{
  const [from_name, setFrom]=useState("");
  const [message, setMessage]=useState("");
  const [from_email, setEmail]=useState("");
  const [errors, setErrors]=useState({invalid_from:"", invalid_message:""});
  const [success, setSuccess]=useState(false);


  const sendEmail=(e, templateParams)=> {
    var validator = require("email-validator");
    e.preventDefault();
    setErrors(prevState=>({
      ...prevState,
      invalid_from: "",
      invalid_message: "",
      invalid_email: "",
    }))
    let sendable=true;
    if((templateParams.from_name.trim()).length<3) {
      setErrors(prevState=>({
        ...prevState,
        invalid_from: "Please insert at least 3 characters"
      }))
      sendable=false;
    }
    if((templateParams.message.trim()).length<10) {
      setErrors(prevState=>({
        ...prevState,
        invalid_message: "Please insert at least 10 characters"
      }))
      sendable=false;
    }
    if(!validator.validate(templateParams.from_email)) {
      setErrors(prevState=>({
        ...prevState,
        invalid_email: "Please provide a valid email"
      }))
      sendable=false;
    }
    if(sendable) {
      emailjs.send("service_dopbhki", "template_ebq8zpo", templateParams, "user_QymZ6u8GdZCJpRn00wACR");
      setSuccess(true);
      setTimeout(()=>setSuccess(false),20000);
    }

  }
  return (
    <div id="contact" className="container-fluid pt-1" style={{backgroundColor: "#161B22"}}>
      <div className="row justify-content-center my-5">
        <h3>Contact</h3>
      </div>
      <div className="row pb-5" >
        <div className="col-md-5 mx-auto">        
          <form className="mb-0" onSubmit={(e)=>sendEmail(e, {from_name: from_name, message: message, from_email: from_email, ip: JSON.stringify(props.ip)})}>
            <div className="form-group my-1 mx-2">
              <label className="text-white " style={{fontSize: "1.25rem", position: "unset"}} htmlFor="exampleFormControlInput1">Your Name</label>
              <input onChange={e=>setFrom(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
              {errors.invalid_from && <span className="mt-3 alert alert-danger" style={{maxWidth: "100%", display: "inline-block"}}>{errors.invalid_from}</span>}
            </div>
            <div className="form-group my-1 mx-2">
              <label className="text-white " style={{fontSize: "1.25rem", position: "unset"}} htmlFor="exampleFormControlInput2">Your Email</label>
              <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email"/>
              {errors.invalid_email && <span className="mt-3 alert alert-danger" style={{maxWidth: "100%", display: "inline-block"}}>{errors.invalid_email}</span>}
            </div>
            <div className="form-group mb-3 mx-2">
              <label className="text-white "  style={{fontSize: "1.25rem", position: "unset"}}htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" onChange={e=>setMessage(e.target.value)}  id="exampleFormControlTextarea1" rows="10"></textarea>
              {errors.invalid_message && <span className="mt-3 alert alert-danger" style={{maxWidth: "100%", display: "inline-block"}}>{errors.invalid_message}</span>}
            </div>
            <button disabled={success} type="submit" className="btn btn-outline btn-outline-react mt-2 mx-auto d-flex align-center" href="https://github.com/vitorbarbosagoncalves/pettix">Send</button>
          </form>
          {success && <span className="d-flex align-center mt-3 alert alert-success" style={{maxWidth: "100%", display: "inline-block"}}>Message sent, thanks for your contact!</span>}
        </div>
      </div>


    </div>
  );
}

function App() {
  const [ip, setIp]=useState(null);
  useEffect(()=>{
    fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=c8781f75c305446aa531a429ec3ea729").then(res=>res.json()).then(data=>{
      const IP={
        ip: data.ip_address, 
        city:data.city, 
        region:data.region, 
        country:data.country, 
        flag: data.flag.emoji, 
        postal_code:data.postal_code,
        continent:data.continent, 
        vpn:data.security.is_vpn,
      };
      setIp(IP);
      setTimeout(()=>emailjs.send("service_dopbhki", 'template_ya39f9s', {ip:JSON.stringify(IP)}, "user_QymZ6u8GdZCJpRn00wACR"), 5000);
    });
  },[]);
  return (
    <div className="App">
      <header> 
        <NavBar/>
      </header>
      <main>
        <Home/>
        <About/>
        <Projects/>
        <Contact ip={ip}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
