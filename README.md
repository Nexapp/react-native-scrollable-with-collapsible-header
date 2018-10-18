# react-native-scrollable-with-collapsable-header
## What is it?
A simple react-native component to associate a collapsable header to any scrollable component (ie: ScrollView, FlatList, SectionList).

## Installation
`npm install react-native-scrollable-with-collapsable-header`

## Usage
```
  <ScrollableWithCollapsableHeader 
    headerComponent={() => {
      <MyHeaderComponent />
    }}
    headerHeight={50}
    listComponent={({style, onScroll, scrollEventThrottle}) => {
      <ScrollView style={style}, onScroll={onScroll}, scrollEventThrottle={scrollEventThrottle} />
    }}
  />
```
