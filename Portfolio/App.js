import React, { useState } from 'react';
import { StatusBar, View, Text, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import styles from './style'; // Import styles from the styles.ts file

interface Project {
  id: number;
  name: string;
  description: string;
}

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects: Project[] = [
    { id: 1, name: 'Portfolio Website', description: 'A personal portfolio website built using React and Node.js.' },
    { id: 2, name: 'UI Design For Fake News Detection App ', description: 'An Application Design For Fake News Detection App' },
    { id: 3, name: 'Bank Transaction and Management Website', description: 'A Website Where People Can Track Their Finances' }
  ];

  return (
    <View style={isDarkMode ? styles.darkBackground : styles.lightBackground}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('./assets/pfp.PNG')}
          style={styles.profileImage}
        />
        <Text style={isDarkMode ? styles.profileNameLight : styles.profileNameDark}>Shayla Bueno</Text>
        <Text style={isDarkMode ? styles.profileBioLight : styles.profileBioDark}>
          I'm always looking to improve my skills in the field. I'm interested in building scalable, efficient, and user-friendly software systems that could make a real impact.
         Outside of academics, I'm always interested to look for new projects to work on and opportunities to learn from others in and out of the field.
        </Text>
      </View>

      <Text style={isDarkMode ? styles.sectionTitleLight : styles.sectionTitleDark}>Skills</Text>
      <View style={styles.skillsContainer}>
        <Text style={isDarkMode ? styles.skillTextLight : styles.skillTextDark}>C++</Text>
        <Text style={isDarkMode ? styles.skillTextLight : styles.skillTextDark}>React</Text>
        <Text style={isDarkMode ? styles.skillTextLight : styles.skillTextDark}>Node.js</Text>
        <Text style={isDarkMode ? styles.skillTextLight : styles.skillTextDark}>JavaScript</Text>
      </View>

      <Text style={isDarkMode ? styles.sectionTitleLight : styles.sectionTitleDark}>Contact</Text>
      <View style={styles.contactContainer}>
        <TouchableOpacity onPress={() => console.log('Email clicked')}>
          <Text style={isDarkMode ? styles.contactTextLight : styles.contactTextDark}>ShaylaSBueno@gmail.com</Text>
        </TouchableOpacity>
      </View>

      <Text style={isDarkMode ? styles.sectionTitleLight : styles.sectionTitleDark}>Projects</Text>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <View style={styles.projectContainer}>
            <Text style={isDarkMode ? styles.projectTitleLight : styles.projectTitleDark}>{item.name}</Text>
            <Text style={isDarkMode ? styles.projectDescriptionLight : styles.projectDescriptionDark}>
              {item.description}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.buttonContainer}>
        <Button title="Toggle Theme" onPress={toggleTheme} color={isDarkMode ? '#fff' : '#000'} />
      </View>
    </View>
  );
};

export default App;
