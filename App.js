import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  // Sample data
  const student = {
    name: "Refiloe Rampai",
    studentNumber: "901016730",
    profilePicture: require('./dp.jpg'),
    currentSemester: "BScSMY2S2",
    semesterGrades: [
      { semester: "JAVA", grades: ["A"] },
      { semester: "Database", grades: ["B"] },
      { semester: "C++", grades: ["A"] }
    ]
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={student.profilePicture} style={styles.profilePicture} />
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.studentNumber}>Student Number: {student.studentNumber}</Text>
        <Text style={styles.semester}>Current Semester: {student.currentSemester}</Text>
      </View>
      <ScrollView style={styles.semesterDetailsContainer}>
        {student.semesterGrades.map((item, index) => (
          <View key={index} style={styles.semesterGradeItem}>
            <Text style={styles.semesterName}>{item.semester}</Text>
            <View style={styles.gradeList}>
              {item.grades.map((grade, idx) => (
                <Text key={idx} style={styles.grade}>{grade}</Text>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'grey',
  },
  profileContainer: {
    alignItems: 'start',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 55,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  studentNumber: {
    fontSize: 16,
    marginBottom: 5,
  },
  semester: {
    fontSize: 16,
    marginBottom: 10,
  },
  semesterDetailsContainer: {
    
    marginBottom: 20,
    maxHeight: 80,
    width:400, // Adjust the height as per your requirement
    height:200,
  },
  semesterGradeItem: {
    
    marginBottom: 5,
    padding: 0,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  semesterName: {
    
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  gradeList: {
    
    flexDirection: 'row',
  },
  grade: {
    justifyContent:'center',
    marginRight: 10,
    fontSize: 16,
  },
});

export default ProfileScreen;
