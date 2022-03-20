import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../Component/ButtonComponent";
import * as COLOR from "../Component/Colors";

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handelNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleSelectedOptions = _option => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }
    if (ques === 9) {
      handleShowResult();
    }
  };
  const handleShowResult = () => {
    navigation.navigate("Result", { score: score });
  };
  return (
    <View style={styles.container}>
      {isLoading
        ? <View style={styles.container}>
          
          <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <ActivityIndicator size={'large'} color={COLOR.BUTTON_BACKGROUND}/>
          </View>

          </View>
        : questions
          && (<View style={styles.parent}>
              <View style={styles.top}>
                <Text style={styles.questions}>
                  Q. {decodeURIComponent(questions[ques].question)}
                </Text>
              </View>
              <View style={styles.optionContainer}>
                <TouchableOpacity
                  style={styles.options}
                  onPress={() => handleSelectedOptions(options[0])}
                >
                  <Text>
                    {decodeURIComponent(options[0])}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.options}
                  onPress={() => handleSelectedOptions(options[1])}
                >
                  <Text>
                    {decodeURIComponent(options[1])}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.options}
                  onPress={() => handleSelectedOptions(options[2])}
                >
                  <Text>
                    {decodeURIComponent(options[2])}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.options}
                  onPress={() => handleSelectedOptions(options[3])}
                >
                  <Text>
                    {decodeURIComponent(options[3])}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}>
                {/* <ButtonComponent label={"PREVIOUS"} /> */}

                {ques !== 9 &&
                  <ButtonComponent label={"SKIP"} onPress={handelNextPress} />}
                {ques === 9 &&
                  <ButtonComponent
                    label={"SHOW RESULT"}
                    onPress={handleShowResult()}
                  />}
              </View>
            </View>
)         }
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: "100%",
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: COLOR.HOME_BACKGROUND
  },
  parent: {
    height: "100%"
  },

  optionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  options: {
    marginVertical: 12,
    padding: 12,
    backgroundColor: COLOR.OPTIONS_COLOR,
    borderRadius: 18,
    shadowColor: COLOR.SHADOWCOLOR,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3,
    height: 50,
    width: "100%"
  },
  bottom: {
    marginVertical: 10,
    paddingVertical: 16,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  top: {
    width: "100%",
    marginVertical: 16,
    borderRadius: 18,
    backgroundColor: COLOR.OPTIONS_COLOR
  },
  questions: {
    margin: 16,
    fontSize: 20,
    fontWeight: "300",
    color: COLOR.WHITE
  }
});
