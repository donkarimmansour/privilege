import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import Countdown from 'react-countdown';
import { English } from "../../common/quizzes";
import myClassnames from 'classnames';
import swal from "sweetalert";
import "./test.css";
import { useDispatch, useSelector } from "react-redux";
import { createExam } from "../../redux/exam/action";
import { checkString, loader } from "../../common/funs";
import { cleanAlerts } from "../../redux/exam/reducer";
import { updateProfileTest } from "../../redux/auth/reducer";
import { useNavigate } from "react-router-dom";

const Test = () => { 

  const dispatch = useDispatch()
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([])
  const [currentQuiz, setCurrentQuiz] = useState({ question: "", answer: "", status: false, type: "", text: "" })
  const [currentChoose, setCurrentChoose] = useState(0)
  const [quizTest, setQuizTest] = useState([])
  const quizTime = 600000
  const { loading, error, success } = useSelector(state => state.exam)
  const {user } = useSelector(state => state.auth) 

  useEffect(() => {
    if ( user.tested === "yes" ) {
      console.log(22);

        navigate("/") 
    }
  }, [user?.tested])

  useEffect(() => {
    if (English && English.length > 0) {

      setQuizzes(English.slice(0, 2))
      setCurrentQuiz({ ...English[0], id: 1 })
    }

  }, [English])


  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      done()

      return <span className="text-white position-absolute">okey</span>;
    } else {
      return <span className="text-white position-absolute">{minutes}:{seconds}</span>;
    }
  };


  const replyQuiz = (choose, question, answer, status, type, text) => {

    const replayIndex = quizTest.findIndex(q => q.question === question)

    if (replayIndex > -1) {
      quizTest.splice(replayIndex, 1, { question, reply: answer, status: status, type, text });
      setQuizTest([...quizTest])

    } else {
      setQuizTest([...quizTest, { question, reply: answer, status: status, type, text }])

    }

    setCurrentChoose(choose)

  };


  const nextQuiz = () => {

    if (currentQuiz.id < quizzes.length && quizTest.length >= currentQuiz.id) {

      const nextIndex = quizTest.findIndex(q => q.question === quizzes[currentQuiz.id].question)

      if (nextIndex > -1) {
        const answerIndex = quizzes[nextIndex].answers.findIndex(a => a.answer === quizTest[nextIndex].reply)
        setCurrentChoose(answerIndex + 1)

      } else {
        setCurrentChoose(0)
      }

      setCurrentQuiz({ ...quizzes[currentQuiz.id], id: currentQuiz.id + 1 })

    } else if (currentQuiz.id === quizzes.length && quizzes.length === quizTest.length) {
      done()
    } else {
      swal("warning", "please reply", "warning")
    }

  };

  const prevQuiz = () => {
    if (currentQuiz.id > 1) {
      const prevIndex = quizTest.findIndex(q => q.question === quizzes[currentQuiz.id - 2].question)

      const answerIndex = quizzes[prevIndex].answers.findIndex(a => a.answer === quizTest[prevIndex].reply)

      setCurrentChoose(answerIndex + 1)
      setCurrentQuiz({ ...quizzes[currentQuiz.id - 2], id: currentQuiz.id - 1 })
    }
  };

  const done = () => {
    const failureAnswers = quizTest.filter(q => !q.status).length
 
    const rate = Math.floor(((quizzes.length - failureAnswers) / failureAnswers) * 100)
    // console.log((quizzes.length - failureAnswers));
    // console.log(((quizzes.length - failureAnswers) / failureAnswers));
    // console.log(rate);

    swal("done", `your dagre is : ${rate}`, "success")
       
    dispatch(createExam({rate , exam : quizTest}))
    
  };



  
  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

      if(success === "tested"){
        dispatch(updateProfileTest("yes")) 
      }

    } else if (error) {
      swal(t("Error"), t(checkString(error)), "error");
    }

    dispatch(cleanAlerts())

  }, [success, error]);



  return (

    <div className="wrapper position-relative overflow-hidden">
      {loading && loader()}

      {quizzes && quizzes.length > 0 &&
        <>

          <div className="background" style={{ backgroundImage: `url(/assets/images/test/bg_0.png)` }}>
          </div>
          {/* Top content */}
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-6">
                <div className="logo_area m-3 ms-5">
                  <a href="index.html">
                    <img src="/assets/images/test/logo.png" alt="image_not_found" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 d-none d-md-block">

                <div className="clock_area countdown_timer position-relative mt-3 me-5" >
                  <img className="position-absolute" src="/assets/images/test/clock.png" alt="image_not_found" />
                  <Countdown date={Date.now() + quizTime} renderer={renderer} />
                </div>

              </div>
            </div>
          </div>
          <div className="container p-0">

            <form className="multisteps_form" method="POST" action="../thankyou/index-2.html">
              {/*----------------------- Steps ---------------------------*/}
              <div className="multisteps_form_panel">
                <div className="row">
                  <div className="col-md-7 m-auto">
                    <div className="content_box position-relative">
                      <div className="question_number text-uppercase">
                        <span>{`${t("Questions")} ${currentQuiz.id} / ${quizzes.length}`}</span>
                      </div>

                      {currentQuiz.type === "complate" ?
                        <>
                          <p>{t("In this section you must choose the word or phrase which best completes each sentence")}</p>

                          <div className="question_title py-3 text-uppercase">
                            <h1>{currentQuiz.text}</h1>
                          </div>

                          <p>{currentQuiz.question}</p>
                        </> :

                        <div className="question_title py-3 text-uppercase">
                          <h1>{currentQuiz.question}</h1>
                        </div>
                      }

                      <div className="form_items">

                        {currentQuiz.answers.map((a, ai) => {
                          return (
                            <label key={ai} className={myClassnames("step_1 rounded-pill position-relative bg-white", { "active": (ai + 1) === currentChoose })}>
                              {a.answer}
                              <input type="radio" onClick={() => { replyQuiz((ai + 1), currentQuiz.question, a.answer, a.status, currentQuiz.type, a.text) }} />
                              <span className="position-absolute">A</span>
                            </label>
                          )
                        })}


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Left-side-img */}
              <div className="left-side-img">
                <img src="/assets/images/test/bg_1.png" alt="image_not_found" />
              </div>
              {/* Step-progress */}
              <div className="step_progress position-absolute">
                {quizzes.map((q, qi) => {
                  return (<div key={qi} className={myClassnames("step rounded-pill position-relative text-center", { "active": (qi + 1) === currentQuiz.id })}>{(qi + 1)}</div>)
                })}

              </div>
            </form>

            {/*----------------------- Form button ---------------------------*/}
            <div className="form_btn">
              {currentQuiz.id > 1 &&
                <button type="button" onClick={prevQuiz} className="f_btn prev_btn text-uppercase rounded-pill position-absolute">{t("Prev")}</button>
              }

              <button type="button" onClick={nextQuiz} className="f_btn next_btn text-uppercase rounded-pill position-absolute">{t("Next")}</button>
            </div>
          </div>

        </>
      }
    </div>
  )

}

export default Test