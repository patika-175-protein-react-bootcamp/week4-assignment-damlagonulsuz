/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../App.css';
import Q from '../constants/Icon/Q';
import Answers from '../constants/Icon/Answers';
import { TourContext } from '../context/Tour';
import Tour from '../components/Tour';

function Questions() {
    let randomNumber1;
    let randomNumber2;

    function RandomNum(){
        
        randomNumber1 = Math.floor(Math.random() * 11);//0-10 arası sayı türetir
        randomNumber2 = Math.floor(Math.random() * 11);
        setNum1(randomNumber1);
        setNum2(randomNumber2);
    }


    const [tour, setTour] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [trueAnswer, setTrueAnswer] = useState(0);
    const [falseAnswer, setFalseAnswer] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [failed1, setFailed1] = useState(0);
    

    let numArray = [];
    numArray.push(num1);
    numArray.push(num2);

    console.log('aaray:', numArray);
    
    let newNum;
    let otherNum;

    function wrongAnswer1() {
        for(let i=0; i< numArray.length; i++){
            const randomNumFromArray = numArray[Math.floor(Math.random() * numArray.length)];
            newNum = randomNumFromArray + 1;
            if (numArray[i] !== randomNumFromArray) {
                otherNum = numArray[i] -1;
                
            }
        }
        setFailed1( newNum * otherNum);
        console.log('failed:',failed1);
    }

    useEffect(() => {
        RandomNum();
       

    }, [questionNumber]);

    useEffect(() => {
        wrongAnswer1();
    }, [RandomNum]);
    
    for(let i = 0; i < 10; i++) {
        (setQuestionNumber + 1);
    }

    const data = {
        tour,
        setTour
    };

    console.log('num1:', num1);
    console.log('num2:', num2);


    return (
        <div className='question-general'>

            <div className='up-bar'>

                <p>Score: </p>
                <TourContext.Provider value={data}>
                    <Tour />
                </TourContext.Provider>
                <p>Questions: </p>
            </div>
            <div className='questions'>
                <Q num1 = {num1} num2 = {num2}/>

            </div>
            <div>
                <Answers />
            </div>
           

        </div>
    );
}

export default Questions;
