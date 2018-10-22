# react-native-scrollable-with-collapsible-header
## What is it?
A simple react-native component to associate a collapsible header to any scrollable animated component (ie: ScrollView, FlatList, SectionList).

## Installation
`npm install react-native-scrollable-with-collapsible-header`

## Usage
```
  <ScrollableWithCollapsibleHeader 
    headerComponent={() => {
      <MyHeaderComponent />
    }}
    headerHeight={50}
    listComponent={({style, onScroll, scrollEventThrottle}) => {
      <Animated.ScrollView style={style}, onScroll={onScroll}, scrollEventThrottle={scrollEventThrottle} />
    }}
  />
```
