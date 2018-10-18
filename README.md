# react-native-scrollable-with-collapsible-header
## What is it?
A simple react-native component to associate a collapsible header to any scrollable component (ie: ScrollView, FlatList, SectionList).

## Installation
`npm install react-native-scrollable-with-collapsable-header`

## Usage
```
  <ScrollableWithCollapsibleHeader 
    headerComponent={() => {
      <MyHeaderComponent />
    }}
    headerHeight={50}
    listComponent={({style, onScroll, scrollEventThrottle}) => {
      <ScrollView style={style}, onScroll={onScroll}, scrollEventThrottle={scrollEventThrottle} />
    }}
  />
```
