import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const MobileLpHcHinTi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileLpHcHinTi}>
      <View style={[styles.component2, styles.component2Position]}>
        <View style={[styles.component2Child, styles.childPosition]} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("IPhone1415ProMax")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-339.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("IPhone1415ProMax1")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={[styles.rectangleParent, styles.mobileFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-337.png")}
          />
          <Text style={[styles.van, styles.vanTypo]}>9 VAN</Text>
        </View>
      </View>
      <View style={[styles.mobileThanhTcV, styles.mobileFlexBox]}>
        <Pressable
          style={styles.constructionhouseOutlineParent}
          onPress={() => navigation.navigate("MobileTngQuan")}
        >
          <Image
            style={[styles.constructionhouseOutlineIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/constructionhouse-outline2.png")}
          />
          <Text style={[styles.tngQuan, styles.luynTypo]}>Tổng quan</Text>
        </Pressable>
        <Pressable
          style={[
            styles.usermultipleUsersOutlineParent,
            styles.mobileThanhTcVInnerFlexBox,
          ]}
          onPress={() => navigation.navigate("MobileLpHcHinTi")}
        >
          <Image
            style={styles.usermultipleUsersOutline}
            resizeMode="cover"
            source={require("../assets/usermultiple-users-outline11.png")}
          />
          <Text style={[styles.lpHc, styles.labelLayout]}>Lớp học</Text>
        </Pressable>
        <Pressable
          style={styles.mobileThanhTcVInnerFlexBox}
          onPress={() => navigation.navigate("MobileBiCaTi")}
        >
          <View style={styles.datadataOutlineParent}>
            <Image
              style={[styles.datadataOutlineIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/datadata-outline3.png")}
            />
            <Text style={[styles.luyn, styles.luynTypo]}>Luyện đề</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.mobileThanhTcVInnerFlexBox}
          onPress={() => navigation.navigate("MobileBiTp")}
        >
          <Image
            style={styles.usermultipleUsersOutline}
            resizeMode="cover"
            source={require("../assets/file-systemfile-with-itens-outline2.png")}
          />
          <Text style={styles.luynTypo}>Bài tập</Text>
        </Pressable>
      </View>
      <View style={[styles.mobileThanhTmKim, styles.mobileFlexBox]}>
        <Text
          style={[styles.lpHc1, styles.lp9ATypo]}
        >{`Lớp học hoạt động `}</Text>
        <View style={[styles.mobileThanhTmKimChild, styles.component3Layout]} />
        <Text style={[styles.lp, styles.lpTypo]}>{`4 lớp `}</Text>
        <View style={styles.input}>
          <View style={[styles.surface, styles.fillPosition]}>
            <View style={[styles.fill, styles.fillLayout]} />
          </View>
          <Text style={[styles.placeholder, styles.lpTypo]}>Tìm kiếm</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/search-icon.png")}
          />
        </View>
        <View style={[styles.component3, styles.component3Layout]}>
          <View style={[styles.component3Inner, styles.childPosition1]}>
            <View style={styles.dropdownWrapper}>
              <View style={styles.dropdown}>
                <View style={[styles.focus, styles.focusPosition]} />
                <Text style={styles.label}>Lớp học</Text>
                <Image
                  style={[styles.icon2, styles.icon2Position]}
                  resizeMode="cover"
                  source={require("../assets/icon15.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.dropdownMenu, styles.focus1Border]}>
            <View style={styles.dropdownParent}>
              <View style={styles.dropdown1}>
                <View style={[styles.focus1, styles.focus1Border]} />
                <Text style={[styles.label1, styles.icon2Position]}>
                  Hiện tại
                </Text>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.dropdownParent}>
                  <View style={styles.dropdown2}>
                    <Text style={[styles.label2, styles.lp9ATypo]}>
                      Kết thúc
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("MobileToLpHc")}
      >
        <Image
          style={styles.iconLayout2}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
      </Pressable>
      <View style={styles.mobileLpHcParent}>
        <View style={styles.mobileLayout}>
          <View style={[styles.mobileLpHcChild, styles.image15IconLayout]} />
          <Pressable
            style={[styles.icon4, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileXaLp")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/3-icon61.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon6, styles.iconFlexBox]}
            onPress={() => navigation.navigate("MobileChnhSaLp")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon101.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon8, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileThnhCng4")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/2-icon101.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon10, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileKtThcLp")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/2-icon111.png")}
            />
          </Pressable>
          <View style={[styles.icon12, styles.lp9APosition]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon211.png")}
            />
            <Text style={[styles.label3, styles.labelLayout]}>Hoạt động</Text>
          </View>
          <Text style={[styles.lp9A, styles.lp9APosition]}>Lớp 9 A 13</Text>
          <Image
            style={[styles.image15Icon, styles.image15IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-1511.png")}
          />
          <Text
            style={[styles.vnHcNgh, styles.hcSinhTypo]}
          >{`Văn học nghệ thuật đương đại `}</Text>
          <Text style={[styles.hcSinh, styles.hcSinhTypo]}>23/30 học sinh</Text>
        </View>
        <View style={[styles.mobileLpHc1, styles.mobileLayout]}>
          <View style={[styles.mobileLpHcChild, styles.image15IconLayout]} />
          <Pressable
            style={[styles.icon4, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileXaLp")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/3-icon61.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon6, styles.iconFlexBox]}
            onPress={() => navigation.navigate("MobileChnhSaLp")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon101.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon8, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileThnhCng4")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/2-icon101.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon10, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileKtThcLp")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/2-icon111.png")}
            />
          </Pressable>
          <View style={[styles.icon12, styles.lp9APosition]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon211.png")}
            />
            <Text style={[styles.label3, styles.labelLayout]}>Hoạt động</Text>
          </View>
          <Text style={[styles.lp9A, styles.lp9APosition]}>Lớp 9 A 13</Text>
          <Image
            style={[styles.image15Icon, styles.image15IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-1511.png")}
          />
          <Text
            style={[styles.vnHcNgh, styles.hcSinhTypo]}
          >{`Văn học nghệ thuật đương đại `}</Text>
          <Text style={[styles.hcSinh, styles.hcSinhTypo]}>23/30 học sinh</Text>
        </View>
        <View style={[styles.mobileLpHc1, styles.mobileLayout]}>
          <View style={[styles.mobileLpHcChild, styles.image15IconLayout]} />
          <Pressable
            style={[styles.icon4, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileXaLp")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/3-icon61.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon6, styles.iconFlexBox]}
            onPress={() => navigation.navigate("MobileChnhSaLp")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon101.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon8, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileThnhCng4")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/2-icon101.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon10, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileKtThcLp")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/2-icon111.png")}
            />
          </Pressable>
          <View style={[styles.icon12, styles.lp9APosition]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon211.png")}
            />
            <Text style={[styles.label3, styles.labelLayout]}>Hoạt động</Text>
          </View>
          <Text style={[styles.lp9A, styles.lp9APosition]}>Lớp 9 A 13</Text>
          <Image
            style={[styles.image15Icon, styles.image15IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-1511.png")}
          />
          <Text
            style={[styles.vnHcNgh, styles.hcSinhTypo]}
          >{`Văn học nghệ thuật đương đại `}</Text>
          <Text style={[styles.hcSinh, styles.hcSinhTypo]}>23/30 học sinh</Text>
        </View>
        <View style={[styles.mobileLpHc1, styles.mobileLayout]}>
          <View style={[styles.mobileLpHcChild, styles.image15IconLayout]} />
          <Pressable
            style={[styles.icon4, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileXaLp")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/3-icon21.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon6, styles.iconFlexBox]}
            onPress={() => navigation.navigate("MobileChnhSaLp")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon201.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon8, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileThnhCng4")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/2-icon31.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.icon10, styles.iconPosition]}
            onPress={() => navigation.navigate("MobileKtThcLp")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/2-icon41.png")}
            />
          </Pressable>
          <View style={[styles.icon12, styles.lp9APosition]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/icon211.png")}
            />
            <Text style={[styles.label3, styles.labelLayout]}>Hoạt động</Text>
          </View>
          <Text style={[styles.lp9A, styles.lp9APosition]}>Lớp 9 A 13</Text>
          <Image
            style={[styles.image15Icon, styles.image15IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-1511.png")}
          />
          <Text
            style={[styles.vnHcNgh, styles.hcSinhTypo]}
          >{`Văn học nghệ thuật đương đại `}</Text>
          <Text style={[styles.hcSinh, styles.hcSinhTypo]}>23/30 học sinh</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component2Position: {
    left: 0,
    width: 430,
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mobileFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  luynTypo: {
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  mobileThanhTcVInnerFlexBox: {
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  labelLayout: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  lp9ATypo: {
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  component3Layout: {
    height: 35,
    marginLeft: 8,
  },
  lpTypo: {
    color: Color.gray70,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
  },
  fillPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  fillLayout: {
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  childPosition1: {
    right: "0%",
    width: "100%",
  },
  focusPosition: {
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
    borderWidth: 2,
  },
  icon2Position: {
    left: 16,
    top: "50%",
    position: "absolute",
  },
  focus1Border: {
    display: "none",
    borderStyle: "solid",
    position: "absolute",
  },
  image15IconLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconPosition: {
    height: "17.88%",
    width: "7.95%",
    bottom: "12.47%",
    top: "69.65%",
    position: "absolute",
  },
  iconFlexBox: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  lp9APosition: {
    top: "5.94%",
    height: "19.06%",
    alignItems: "center",
    position: "absolute",
  },
  hcSinhTypo: {
    height: "11.88%",
    left: "42.18%",
    fontFamily: FontFamily.h5Regular,
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  mobileLayout: {
    height: 170,
    width: 380,
  },
  component2Child: {
    backgroundColor: Color.colorGray_100,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_xs,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "87.21%",
    top: "24.44%",
    right: "2.33%",
    bottom: "24.44%",
    width: "10.47%",
    height: "51.11%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "80.23%",
    top: "38.89%",
    right: "16.28%",
    bottom: "38.89%",
    width: "3.49%",
    height: "22.22%",
    position: "absolute",
  },
  frameChild: {
    borderRadius: 12,
    width: 48,
    height: 46,
  },
  van: {
    fontSize: FontSize.h1Bold_size,
    lineHeight: 36,
    color: Color.stroke2nd,
    marginLeft: 16,
  },
  rectangleParent: {
    width: "31.63%",
    right: "68.37%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  component2: {
    height: 90,
    width: 430,
    top: 0,
    left: 0,
    position: "absolute",
  },
  constructionhouseOutlineIcon: {
    height: "64%",
    width: "47.06%",
    right: "26.47%",
    bottom: "36%",
    left: "26.47%",
    top: "0%",
    position: "absolute",
  },
  tngQuan: {
    top: "58%",
    left: "0%",
    position: "absolute",
  },
  constructionhouseOutlineParent: {
    width: 68,
    height: 50,
  },
  usermultipleUsersOutline: {
    width: 32,
    height: 32,
  },
  lpHc: {
    color: Color.blue50,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  usermultipleUsersOutlineParent: {
    backgroundColor: Color.white,
  },
  datadataOutlineIcon: {
    height: "61.19%",
    width: "54.24%",
    right: "22.03%",
    bottom: "38.81%",
    left: "23.73%",
    top: "0%",
    position: "absolute",
  },
  luyn: {
    top: "59.85%",
    left: "0%",
    position: "absolute",
  },
  datadataOutlineParent: {
    width: 59,
    height: 52,
  },
  mobileThanhTcV: {
    top: 859,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.colorGray_100,
    width: 430,
    left: 0,
    overflow: "hidden",
  },
  lpHc1: {
    width: 70,
    height: 39,
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    color: Color.gray20,
    alignItems: "center",
  },
  mobileThanhTmKimChild: {
    borderColor: Color.colorSilver,
    borderRightWidth: 2,
    width: 2,
    marginLeft: 8,
    borderStyle: "solid",
  },
  lp: {
    width: 34,
    height: 20,
    marginLeft: 8,
    display: "flex",
    alignItems: "center",
  },
  fill: {
    borderRadius: Border.br_3xs,
    borderColor: Color.gray60,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    borderStyle: "solid",
  },
  surface: {
    opacity: 0.99,
  },
  placeholder: {
    top: 6,
    left: 40,
    position: "absolute",
  },
  searchIcon: {
    top: 4,
    left: 8,
    position: "absolute",
  },
  input: {
    width: 170,
    marginLeft: 8,
    height: 32,
  },
  focus: {
    borderColor: Color.blue60,
    borderWidth: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  label: {
    left: 48,
    top: "50%",
    marginTop: -10,
    color: Color.gray20,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    position: "absolute",
  },
  icon2: {
    marginTop: -12,
    height: 24,
    width: 24,
  },
  dropdown: {
    width: 98,
    height: 32,
    backgroundColor: Color.white,
  },
  dropdownWrapper: {
    width: 98,
  },
  component3Inner: {
    height: "27.14%",
    bottom: "72.86%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  focus1: {
    borderColor: Color.white,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
  },
  label1: {
    width: 66,
    marginTop: -10,
    left: 16,
    color: Color.gray20,
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  dropdown1: {
    alignSelf: "stretch",
    height: 32,
    backgroundColor: Color.white,
  },
  label2: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    flex: 1,
    color: Color.gray20,
  },
  dropdown2: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs_5,
    alignSelf: "stretch",
    height: 32,
    backgroundColor: Color.white,
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownParent: {
    alignSelf: "stretch",
  },
  frameWrapper: {
    marginTop: 3,
    alignSelf: "stretch",
  },
  dropdownMenu: {
    height: "76%",
    width: "102.04%",
    top: "26.86%",
    right: "-1.02%",
    bottom: "-2.86%",
    left: "-1.02%",
    borderRadius: Border.br_11xs,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderColor: Color.gray80,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  component3: {
    width: 98,
    marginLeft: 8,
  },
  mobileThanhTmKim: {
    top: 90,
    left: 1,
    borderColor: Color.colorDimgray,
    borderTopWidth: 1,
    height: 70,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    borderStyle: "solid",
    backgroundColor: Color.white,
    width: 430,
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  container: {
    left: 390,
    top: 812,
    width: 40,
    height: 40,
    position: "absolute",
  },
  mobileLpHcChild: {
    borderColor: Color.gray90,
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  icon4: {
    left: "83.29%",
    right: "8.76%",
  },
  icon6: {
    right: "36.08%",
    left: "55.97%",
    height: "17.88%",
    width: "7.95%",
    bottom: "12.47%",
    top: "69.65%",
    position: "absolute",
    alignItems: "center",
  },
  icon8: {
    right: "49.87%",
    left: "42.18%",
  },
  icon10: {
    left: "69.76%",
    right: "22.29%",
  },
  label3: {
    color: Color.green70,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  icon12: {
    width: "24.66%",
    right: "4.66%",
    bottom: "75%",
    left: "70.68%",
    padding: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  lp9A: {
    width: "20.95%",
    fontSize: FontSize.h3Bold_size,
    lineHeight: 24,
    left: "42.18%",
    display: "flex",
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  image15Icon: {
    height: "59.53%",
    width: "25.13%",
    top: "19.06%",
    right: "66.66%",
    bottom: "21.41%",
    left: "8.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vnHcNgh: {
    width: "45.89%",
    top: "28.59%",
    color: Color.gray10,
  },
  hcSinh: {
    width: "23.34%",
    top: "45.24%",
    color: Color.green70,
  },
  mobileLpHc1: {
    marginTop: 67,
  },
  mobileLpHcParent: {
    top: 180,
    left: 28,
    height: 689,
    position: "absolute",
  },
  mobileLpHcHinTi: {
    backgroundColor: Color.gray90,
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default MobileLpHcHinTi;
