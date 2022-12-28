import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import './all.css';

import toast, { Toaster } from 'react-hot-toast';


function App() {

  const success_toast = () => toast.custom((t) => (

<div class="toast success">
<div class="outer-container">
    <i class="fas fa-check-circle"></i>
</div>
<div class="inner-container">
    <p>Success</p>
    <p>Your changes saved successfully</p>
</div>
</div>

  ) ,{
    duration: 2000,
  });


  const error_toast = () => toast.custom((t) => (
 
    <div class="toast error">
        <div class="outer-container">
            <i class="fas fa-times-circle"></i>
        </div>
        <div class="inner-container">
            <p>Error</p>
            <p>Error has occured while saving changes.</p>
        </div>
      
    </div>
  
      ),{
        duration: 2000,
      });

      const info_toast = () => toast.custom((t) => (
 
        <div class="toast info">
        <div class="outer-container">
            <i class="fas fa-info-circle"></i>
        </div>
        <div class="inner-container">
            <p>Info</p>
            <p>New settings available on your account.</p>
        </div>
      
    </div>
      
          ),{
            duration: 2000,
          });

          const warning_toast = () => toast.custom((t) => (
 
            <div class="toast warning">
            <div class="outer-container">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <div class="inner-container">
                <p>Warning</p>
                <p>Username you have entered is invalid.</p>
            </div>
           
        </div>
          
              ),{
                duration: 2000,
              });

  return (
<>

<div className='main-cont'>
      <button onClick={success_toast}>success</button>
      <button onClick={error_toast}>error</button>
      <button onClick={info_toast}>info</button>
      <button onClick={warning_toast}>warning</button>
      <Toaster />
    </div>

</>
  );
}

export default App;
