import React from "react";
import { List } from "react-native-paper";
import { colors } from "../../../utils/Infrastructure";
import { ScrollView } from "react-native-gesture-handler";

export const ListOfMeals = () => {
  return (
    <ScrollView>
      <List.Section title="Meals we offer">
        <List.Accordion
          style={{ backgroundColor: colors.bg.secondary }}
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="egg" />}
        >
          <List.Item title="Peanut Butter Sandwich" />
          <List.Item title="Glass of milk" />
        </List.Accordion>
        <List.Accordion
          style={{ backgroundColor: colors.bg.secondary }}
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food-turkey" />}
        >
          <List.Item title="Chicken and rice" />
          <List.Item title="Glass of Coca-Cola" />
        </List.Accordion>
        <List.Accordion
          style={{ backgroundColor: colors.bg.secondary }}
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="glass-wine" />}
        >
          <List.Item title="Mushroom Soup" />
          <List.Item title="Glass of milk" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
