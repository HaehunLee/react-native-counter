import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = Styled.View`
  flex : 1;
  background-color : #EEE;
`;

const App = () => {
  return (
    <Container>
      <Counter title="카운터 앱" initValue={5} />
    </Container>
  );
};

export default App;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import Styled from 'styled-components/native'

// const ScrollView = Styled.ScrollView`
//   background-color : ${Colors.lighter};
// `;

// const Body = Styled.View`
//   background-color : ${Colors.white};
// `;

// const SectionContainer = Styled.View`
//   margin-top : 32px;
//   padding-horizontal : 24px;
// `;

// const SectionDescription = Styled.Text`
//   margin-top : 8px;
//   font-size : 18px;
//   font-weight : 400;
//   color : ${Colors.dark};
// `;

// const HighLight = Styled.Text`
//   font-weight : 700;
// `;

// interface Props {}

// const App: ({} : Props) => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic">
//           <Header />
//           <Body>
//             <SectionContainer>
//               <SectionDescription>Step One</SectionDescription>
//               <SectionDescription>
//                 Edit <HighLight>App.js</HighLight> to change this
//                 screen and then come back to see your edits.
//               </SectionDescription>
//             </SectionContainer>
//             <SectionContainer>
//               <SectionDescription>See Your Changes</SectionDescription>
//               <SectionDescription>
//                 <ReloadInstructions />
//               </SectionDescription>
//             </SectionContainer>
//             <SectionContainer>
//               <SectionDescription>Debug</SectionDescription>
//               <SectionDescription>
//                 <DebugInstructions />
//               </SectionDescription>
//             </SectionContainer>
//             <SectionContainer>
//               <SectionDescription>Learn More</SectionDescription>
//               <SectionDescription>
//                 Read the docs to discover what to do next:
//               </SectionDescription>
//             </SectionContainer>
//             <LearnMoreLinks />
//           </Body>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
