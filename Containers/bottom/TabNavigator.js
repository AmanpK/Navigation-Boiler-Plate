import { View, Alert, ScrollView, Text } from "react-native";
import {
  Tab,
  Tabs,
  ScrollableTab,
  TabHeading,
} from "native-base";

const TopTabs = () => {
    return (
      <Tabs
        renderTabBar={() => (
          <ScrollableTab tabStyle={{ backgroundColor: "white" }} />
        )}
        tabBarUnderlineStyle={{backgroundColor: 'green'}}
        style={{backgroundColor: 'white'}}
        initialPage={0}
      >
        <Tab
          selected={true}
          underlineStyle={{backgroundColor: 'green'}}
          heading={
            <TabHeading style={{ backgroundColor: 'white',
              paddingHorizontal: 0, flexDirection:'column'}}>
              <Text style={{color: "black",
                fontFamily: "Open Sans",
                fontWeight: "bold"
                }}>About You</Text>
              

            </TabHeading>
          }
        />

        <Tab
          selected={false}
          underlineStyle={{backgroundColor: 'green'}}
          heading={
            <TabHeading style={{ backgroundColor: 'white',
              paddingHorizontal: 0, flexDirection:'column'}}>
              <Text style={{color: "black",
                fontFamily: "Open Sans",
                fontWeight: "bold"}}>Property List</Text>
              

            </TabHeading>
          }
        />

        <Tab
          selected={false}
          underlineStyle={{backgroundColor: 'green'}}
          heading={
            <TabHeading style={{ backgroundColor: 'white',
              paddingHorizontal: 0, flexDirection:'column'}}>
              <Text style={{color: "black",
                fontFamily: "Open Sans",
                fontWeight: "bold"}}>Add Property</Text>
              

            </TabHeading>
          }
        />
      </Tabs>
    );
}

export default TopTabs;
