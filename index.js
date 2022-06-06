import React, { useState } from 'react';

import Transparent from './component/Transparent.js';


//    components

import Logo from './component/Logo.js';
import SideBar from './component/SideBar.js';
import Background from './component/Background.js';

//   Icons

const searchIcon = '/Images/Icons/search (9).png'


//     lecuters 

const DataBase = ["/pdf/DataBase/oracle_1_introduction.ppt", "/pdf/DataBase/oracle_2_sql.pdf", "/pdf/DataBase/oracle_3_transactions_analytic_functions.pdf", "/pdf/DataBase/oracle_2_sql.pdf"]
const NetWork = ["/pdf/Network/Lecture 1.pdf", "/pdf/Network/Lecture 2.pdf", "/pdf/Network/Lecture 3.pdf",]
const Writing = ["/pdf/Writing/Lecture 1.pdf", "/pdf/Writing/Project Selection.pdf"]


const allLectures = [...DataBase , ...NetWork , ...Writing];


  //neccessary for improving ....

// const allLectures = [ 
//     ...DataBase.map((lec, i) => { return `DataBase_lec_${i + 1}`;}),
//     ...NetWork.map((lec, i) => { return `NetWork_lec_${i + 1}`;}),
//     ...Writing.map((lec, i) => {return `Writing_lec_${i + 1}`;})
//                     ];


////      subjects

const subjects = ["DataBase", "NetWork", "Writing"];


///     App component

function App() {
    const [Subject, setSubject] = useState([]);
    const [Title, setTitle] = useState('');
    const [Recognise, setRecognise] = useState('');
    const [link, SetLink] = useState('');
    const [find, setFind] = useState('');
    const [result , setResult] = useState();
    console.log(find);
   
    console.log(link)



    //  Auto Rename the subjects lecture

    const FindLecture = (subject) => {
        if (subject === 'DataBase') {
            setRecognise('DataBase');
            setSubject(DataBase.map((lec, i) => {
                return `DataBase_lec_${i + 1}`;
            }));

        }
        else if (subject === 'NetWork') {
            setRecognise('NetWork');

            setSubject(NetWork.map((lec, i) => {
                return `NetWork_lec_${i + 1}`;
            }));

        }
        else if (subject === 'Writing') {
            setRecognise('Writing');

            setSubject(Writing.map((lec, i) => {
                return `Writing_lec_${i + 1}`;
            }));
        }

    }

    //  filter all lecture and selected lecture will be shown

    const lectureSelection = (lecture, i) => {
        setTitle(lecture);
        if (Recognise === 'DataBase') {
            DataBase.map((FindLink, index) => {
                if (index + 1 === i + 1) {
                    return SetLink(FindLink)
                }
            })

        }
        if (Recognise === 'NetWork') {
            NetWork.map((FindLink, index) => {
                if (index + 1 === i + 1) {
                    return SetLink(FindLink)
                }
            })

        }
        if (Recognise === 'Writing') {
            Writing.map((FindLink, index) => {
                if (index + 1 === i + 1) {
                    return SetLink(FindLink)
                }
            })

        }

    }

    //   closing lecture 

    const CloseLecture = () => {
        SetLink('');
        setTitle('No lecture is open');
    }

    const searchLecture = () => {

        const pdf = allLectures.filter((curElm) => {
            return curElm === find;
        })
         
        if(pdf.length == 0 ){
            SetLink('');
            setTitle('NO Such lecture found')
            setResult('Unknown search');
            return;
        }
        else{
            setTitle("successfull!")
            SetLink(pdf);
            setResult( () => {return` link  found =${find}` } );
            
        }


    }

    return (

        // JSX _ FOR _ STRUCTURE OF WEBISTE
        <div className='App'>


            <div className='web_container'>
                <div className='perfect_container'>
                    <Transparent />
                    <Logo />

                    <SideBar
                        subjects={subjects}
                        FindLecture={FindLecture}
                        Subject={Subject}
                        CloseLecture={CloseLecture}
                        lectureSelection={lectureSelection}
                    />
                    <Background
                        searchLecture={searchLecture}
                        setFind={setFind}
                        searchIcon={searchIcon}
                        Title={Title}
                        link={link}
                    />


                </div>

            </div>

        </div>
    );


}

export default App;
