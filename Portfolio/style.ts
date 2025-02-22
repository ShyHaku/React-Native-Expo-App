import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  lightBackground: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  profileSection: {
  alignItems: 'center',
  marginBottom: 30,
  marginTop: 50,
},
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  profileNameLight: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  profileNameDark: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  profileBioLight: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
  },
  profileBioDark: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
  },
  sectionTitleLight: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  sectionTitleDark: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'center',
  },
  skillTextLight: {
    color: '#fff',
    marginRight: 10,
  },
  skillTextDark: {
    color: '#000',
    marginRight: 10,
  },
  contactContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  contactTextLight: {
    color: '#fff',
    marginRight: 10,
  },
  contactTextDark: {
    color: '#000',
    marginRight: 10,
  },
  projectContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignItems: 'center',
  },
  projectTitleLight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  projectTitleDark: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  projectDescriptionLight: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  projectDescriptionDark: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#000', 
    borderRadius: 5,
    marginBottom: 20, 
  },
});

export default styles;
