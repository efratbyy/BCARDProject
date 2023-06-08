import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES, { SANDBOX_ROUTES } from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandboxMenu from "../sandbox/SandboxMenu";
import Template from "../sandbox/components/Template";
import Test from "../sandbox/components/Test";
import ComponentMenu from "../sandbox/components/ComponentMenu";
import Logic from "../sandbox/components/Logic";
import ConditionalRendering from "../sandbox/conditional-rendering/ConditionalRendering";
import EventsMenu from "../sandbox/events/EventsMenu";
import OnClick from "../sandbox/events/OnClick";
import RaisingEvents from "../sandbox/events/RaisingEvents";
import StringIntDemo from "../sandbox/components/StringIntDemo";
import StringInterpolation from "../sandbox/components/StringInterpolation";
import Babel from "../sandbox/introduction/Babel";
import Loops from "../sandbox/iterations/Loops";
import NavigationMenu from "../sandbox/mui-sandbox/navigations/NavigationMenu";
import UseStateMenu from "../sandbox/use-state/UseStateMenu";
import MuiSandbox from "../sandbox/mui-sandbox/MuiSandbox";
import CustomName from "../sandbox/custom-hooks/CustomName";
import CustomHooksMenu from "../sandbox/custom-hooks/CustomHooksMenu";
import LifecycleMenu from "../sandbox/life-cycle-hooks/LifecycleMenu";
import LifeCycleExe from "../sandbox/life-cycle-hooks/LifeCycleExe";
import MuiAppBar from "../sandbox/mui-sandbox/navigations/MuiAppBar";
import MuiBottomNavigation from "../sandbox/mui-sandbox/navigations/MuiBottomNavigation";
import PropsMenu from "../sandbox/props/PropsMenu";
import PropsObjectMenu from "../sandbox/props/props-object/PropsObjectMenu";
import ChildPropsObject from "../sandbox/props/props-object/ChildPropsObject";
import FatherPropsObject from "../sandbox/props/props-object/FatherPropsObject";
import ChildPropsString from "../sandbox/props/props-string/ChildPropsString";
import FatherPropsString from "../sandbox/props/props-string/FatherPropsString";
import PropsTs from "../sandbox/props/props-ts/PropsTs";
import PropsTwoKeysMenu from "../sandbox/props/props-two-keys/PropsTwoKeysMenu";
import ChildPropsTwoKeys from "../sandbox/props/props-two-keys/ChildPropsTwoKeys";
import FatherPropsTwoKeys from "../sandbox/props/props-two-keys/FatherPropsTwoKeys";
import SetPost from "../sandbox/use-state/SetPost";
import UseState from "../sandbox/use-state/UseState";
import UseStateWithArrayOfObjects from "../sandbox/use-state/UseStateWithArrayOfObjects";
import UseStateWithComplexObject from "../sandbox/use-state/UseStateWithComplexObject";
import UseStateWithFunction from "../sandbox/use-state/UseStateWithFunction";
import UseStateWithObject from "../sandbox/use-state/UseStateWithObject";
import PropsStringMenu from "../sandbox/props/props-string/PropsStringMenu";
import DataDisplayMenu from "../sandbox/mui-sandbox/data-display/DataDisplayMenu";
import LayoutMenu from "../sandbox/mui-sandbox/layout/LayoutMenu";
import FormTest from "../sandbox/forms/FormTest";
import CreateCardPage from "../cards/pages/CreateCardPage";
import A from "../sandbox/context/components/A";
import B from "../sandbox/context/components/B";
import C from "../sandbox/context/components/C";
import ContextMenu from "../sandbox/context/ContextMenu";
import NameProvider from "../sandbox/context/NameProvider";
import SnackExample from "../sandbox/context/SnackExample";
import ContextMenuRouter from "../sandbox/context/ContextMenuRouter";
import ComponentMenuContext from "../sandbox/context/components/ComponentMenuContext";
import CustomCounterHook from "../sandbox/custom-hooks/CustomCounterHook";
import InitialCycle from "../sandbox/life-cycle-hooks/InitialCycle";
import UseEffectAsComponentDidMount from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount";
import UseEffectAsComponentDidUpdate from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate";
import UseEffectAsComponentWillUnmount from "../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount";
import UseEffectNoDependencies from "../sandbox/life-cycle-hooks/UseEffectNoDependencies";
import UseStateCycle from "../sandbox/life-cycle-hooks/UseStateCycle";
import Memoization from "../sandbox/memoization/Memoization";
import { UseCallbackMenu } from "../sandbox/memoization/use-callback/UseCallbackMenu";
import UseCallback from "../sandbox/memoization/use-callback/UseCallback";
import ButtonComp from "../sandbox/memoization/use-callback/ButtonComp";
import MuiButton from "../sandbox/mui-sandbox/data-display/MuiButton";
import MuiDivider from "../sandbox/mui-sandbox/data-display/MuiDivider";
import MuiTypography from "../sandbox/mui-sandbox/data-display/MuiTypography";
import Snackbar from "../sandbox/mui-sandbox/data-display/Snackbar";
import MuiBox from "../sandbox/mui-sandbox/layout/MuiBox";
import MuiContainer from "../sandbox/mui-sandbox/layout/MuiContainer";
import MuiGrid from "../sandbox/mui-sandbox/layout/MuiGrid";
import MuiStack from "../sandbox/mui-sandbox/layout/MuiStack";
import CardEditPage from "../cards/pages/CardEditPage";
import { MyCardsPage } from "../cards/pages/MyCardsPage";
import CardFavPage from "../pages/CardFavPage";

const Router = () => {
  // הוא להסתכל על שורת הכתובות ולפיה להראות את הקומפוננטה המבוקשת Router-תפקידו של ה
  return (
    // קומפוננטה שמנהלת את התצוגה של הדפים
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId`} // Card שורה זו משפיעה על שורה 30 בקומפוננטה
        // פה קובעת את המפתחות
        // כאן כתוב מה מצפה לקבל בשורת הכתובת
        // של אחד הכרטיסים id שיהיה cardId השרת מצפה למפתח אחד בשם
        // params-מידע שיגיע מאובייקט ה
        // params-ופה אני קובעת איך יקראו המפתחות שבאובייקט ה params-זה שם המפתח ב cardId
        // ואת הערך יקבל משורת הכתובת params-וזה סימן שצריך לייצר אובייקט של ה params-הנקודותיים זה סימן למפתחות מה :
        // יהיו 2 מפתחות params-אז באובייקט ה /:cardId במידה ואוסיף /: נוסף אחרי
        element={<CardDetailsPage />}
      />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId/${ROUTES.EDIT_CARD}/:cardId`}
        element={<CardEditPage />}
      />
      <Route
        path={`${ROUTES.FAV_CARDS}/:cardId/${ROUTES.EDIT_CARD}/:cardId`}
        element={<CardEditPage />}
      />
      <Route
        path={`${ROUTES.MY_CARDS}/:cardId/${ROUTES.EDIT_CARD}/:cardId`}
        element={<CardEditPage />}
      />
      <Route path={`${ROUTES.EDIT_CARD}/:cardId`} element={<CardEditPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<CardFavPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
      {/* <Route path={`${ROUTES.EDIT_CARD}/:cardId`} element={<CardEditPage />} /> */}

      <Route path={ROUTES.SANDBOX} element={<SandboxMenu />}>
        <Route path={SANDBOX_ROUTES.COMPONENT} element={<ComponentMenu />}>
          <Route path={SANDBOX_ROUTES.LOGIC} element={<Logic />} />
          <Route path={SANDBOX_ROUTES.STRING_INT} element={<StringIntDemo />} />
          <Route
            path={SANDBOX_ROUTES.STRING_INTERPOLATION}
            element={<StringInterpolation />}
          />
          <Route path={SANDBOX_ROUTES.TEMPLATE} element={<Template />} />
          <Route path={SANDBOX_ROUTES.TEST} element={<Test />} />
        </Route>

        <Route
          path={SANDBOX_ROUTES.CONDITIONAL_RENDERING}
          element={<ConditionalRendering />}
        />

        <Route
          path={SANDBOX_ROUTES.CONTEXT_MENU_ROUTER}
          element={<ContextMenuRouter />}
        >
          <Route
            path={SANDBOX_ROUTES.COMPONENT_MENU_CONTEXT}
            element={<ComponentMenuContext />}
          >
            <Route path={SANDBOX_ROUTES.A} element={<A />} />
            <Route path={SANDBOX_ROUTES.B} element={<B />} />
            <Route path={SANDBOX_ROUTES.C} element={<C />} />
          </Route>

          <Route path={SANDBOX_ROUTES.CONTEXT_MENU} element={<ContextMenu />} />
          <Route
            path={SANDBOX_ROUTES.NAME_PROVIDER}
            element={<NameProvider>!</NameProvider>}
          />
          <Route
            path={SANDBOX_ROUTES.SNACK_EXAMPLE}
            element={<SnackExample />}
          />
        </Route>

        <Route path={SANDBOX_ROUTES.CUSTOM_HOOKS} element={<CustomHooksMenu />}>
          <Route path={SANDBOX_ROUTES.CUSTOM_NAME} element={<CustomName />} />
          <Route
            path={SANDBOX_ROUTES.CUSTOM_COUNTER_HOOK}
            element={<CustomCounterHook />}
          />
        </Route>

        <Route path={SANDBOX_ROUTES.EVENTS} element={<EventsMenu />}>
          <Route path={SANDBOX_ROUTES.ON_CLICK} element={<OnClick />} />
          <Route
            path={SANDBOX_ROUTES.RAISING_EVENT}
            element={<RaisingEvents />}
          />
        </Route>

        <Route path={SANDBOX_ROUTES.FORM_TEST} element={<FormTest />} />

        <Route path={SANDBOX_ROUTES.INTRODUCTION} element={<Babel />} />

        <Route path={SANDBOX_ROUTES.ITERATIONS} element={<Loops />} />

        <Route path={SANDBOX_ROUTES.LIFECYCLE_MENU} element={<LifecycleMenu />}>
          <Route
            path={SANDBOX_ROUTES.INITIAL_CYCLE}
            element={<InitialCycle />}
          />
          <Route
            path={SANDBOX_ROUTES.LIFECYCLE_EXE}
            element={<LifeCycleExe />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_EFFECT_DID_MOUNT}
            element={<UseEffectAsComponentDidMount />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_EFFECT_DID_UPDATE}
            element={<UseEffectAsComponentDidUpdate />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_EFFECT_WILL_UNMOUNT}
            element={<UseEffectAsComponentWillUnmount />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_EFFECT_NO_DEPENDENCIES}
            element={<UseEffectNoDependencies />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_STATE_CYCLE}
            element={<UseStateCycle />}
          />
        </Route>

        <Route path={SANDBOX_ROUTES.MEMOIZATION} element={<Memoization />}>
          <Route
            path={SANDBOX_ROUTES.USECALLBACK_MENU}
            element={<UseCallbackMenu />}
          >
            <Route
              path={SANDBOX_ROUTES.USECALLBACK}
              element={<UseCallback />}
            />
            <Route
              path={SANDBOX_ROUTES.BUTTON_COMP}
              element={
                <ButtonComp onClick={() => console.log("hi")}>!</ButtonComp>
              }
            />
          </Route>
          <Route path={SANDBOX_ROUTES.USEMEMO} element={<Memoization />} />
        </Route>

        <Route path={SANDBOX_ROUTES.MUI_SANDBOX} element={<MuiSandbox />}>
          <Route
            path={SANDBOX_ROUTES.DATA_DISPLAY}
            element={<DataDisplayMenu />}
          >
            <Route path={SANDBOX_ROUTES.MUI_BUTTON} element={<MuiButton />} />
            <Route path={SANDBOX_ROUTES.MUI_DIVIDER} element={<MuiDivider />} />
            <Route
              path={SANDBOX_ROUTES.MUI_TYPOGRAPHY}
              element={<MuiTypography />}
            />
            <Route path={SANDBOX_ROUTES.SNACKBAR} element={<Snackbar />} />
          </Route>

          <Route path={SANDBOX_ROUTES.LAYOUT} element={<LayoutMenu />}>
            <Route path={SANDBOX_ROUTES.MUI_BOX} element={<MuiBox />} />
            <Route
              path={SANDBOX_ROUTES.MUI_CONTAINER}
              element={<MuiContainer />}
            />
            <Route path={SANDBOX_ROUTES.MUI_GRID} element={<MuiGrid />} />
            <Route path={SANDBOX_ROUTES.MUI_STACK} element={<MuiStack />} />
          </Route>

          <Route path={SANDBOX_ROUTES.NAVIGATION} element={<NavigationMenu />}>
            <Route path={SANDBOX_ROUTES.MUI_APP_BAR} element={<MuiAppBar />} />
            <Route
              path={SANDBOX_ROUTES.MUI_BOTTOM_NAVIGATION}
              element={<MuiBottomNavigation />}
            />
          </Route>
        </Route>

        <Route path={SANDBOX_ROUTES.PROPS} element={<PropsMenu />}>
          <Route
            path={SANDBOX_ROUTES.PROPS_OBJECT}
            element={<PropsObjectMenu />}
          >
            <Route
              path={SANDBOX_ROUTES.CHILD_PROPS_OBJECT}
              element={<ChildPropsObject name={"efrat"} />}
            />
            <Route
              path={SANDBOX_ROUTES.FATHER_PROPS_OBJECT}
              element={<FatherPropsObject />}
            />
          </Route>

          <Route
            path={SANDBOX_ROUTES.PROPS_STRING}
            element={<PropsStringMenu />}
          >
            <Route
              path={SANDBOX_ROUTES.CHILD_PROPS_STRING}
              element={<ChildPropsString text={"efrat"} />}
            />
            <Route
              path={SANDBOX_ROUTES.FATHER_PROPS_STRING}
              element={<FatherPropsString />}
            />
          </Route>

          <Route path={SANDBOX_ROUTES.PROPS_TS} element={<PropsTs />} />

          <Route
            path={SANDBOX_ROUTES.PROPS_TWO_KEYS}
            element={<PropsTwoKeysMenu />}
          >
            <Route
              path={SANDBOX_ROUTES.CHILD_PROPS_TWO_KEYS}
              element={<ChildPropsTwoKeys first={"efrat"} last={"ben yosef"} />}
            />
            <Route
              path={SANDBOX_ROUTES.FATHER_PROPS_TWO_KEYS}
              element={<FatherPropsTwoKeys />}
            />
          </Route>
        </Route>

        <Route path={SANDBOX_ROUTES.USE_STATE_MENU} element={<UseStateMenu />}>
          <Route path={SANDBOX_ROUTES.SET_POST} element={<SetPost />} />

          <Route path={SANDBOX_ROUTES.USE_STATE} element={<UseState />} />

          <Route
            path={SANDBOX_ROUTES.USE_STATE_ARRAY_OF_OBJECT}
            element={<UseStateWithArrayOfObjects />}
          />

          <Route
            path={SANDBOX_ROUTES.USE_STATE_COMPLEX_OBJECT}
            element={<UseStateWithComplexObject />}
          />

          <Route
            path={SANDBOX_ROUTES.USE_STATE_FUNCTION}
            element={<UseStateWithFunction />}
          />

          <Route
            path={SANDBOX_ROUTES.USE_STATE_OBJECT}
            element={<UseStateWithObject />}
          />
        </Route>

        <Route path={SANDBOX_ROUTES.FORM} element={<FormTest />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
