import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const MobileChnhSaLp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileChnhSaLp}>
      <View style={[styles.component2, styles.fillPosition2]}>
        <View style={[styles.component2Child, styles.modalPosition1]} />
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
          <Text style={[styles.van, styles.labelTypo1]}>9 VAN</Text>
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
          <Text style={[styles.lpHc, styles.labelLayout1]}>Lớp học</Text>
        </Pressable>
        <Pressable
          style={styles.mobileThanhTcVInnerFlexBox}
          onPress={() => navigation.navigate("MobileBiCaTi")}
        >
          <View style={styles.datadataOutlineParent}>
            <Image
              style={[styles.datadataOutlineIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/datadata-outline21.png")}
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
      <View style={[styles.mobileLpHc, styles.mobileLayout]}>
        <View style={styles.mobileLpHcChild} />
        <Pressable
          style={[styles.icon2, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileXaLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/3-icon31.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon4, styles.iconSpaceBlock]}
          onPress={() => navigation.navigate("MobileChnhSaLp")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icon201.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon6, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileThnhCng4")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/2-icon51.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon8, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileKtThcLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/2-icon61.png")}
          />
        </Pressable>
        <View style={[styles.icon10, styles.lp9APosition]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icon111.png")}
          />
          <Text style={[styles.label, styles.labelLayout1]}>Hoạt động</Text>
        </View>
        <Text style={[styles.lp9A, styles.lp9ATypo]}>Lớp 9 A 13</Text>
        <Image
          style={styles.image15Icon}
          resizeMode="cover"
          source={require("../assets/image-1511.png")}
        />
        <Text
          style={[styles.vnHcNgh, styles.placeholderTypo]}
        >{`Văn học nghệ thuật đương đại `}</Text>
        <Text style={[styles.hcSinh, styles.placeholderTypo]}>
          23/30 học sinh
        </Text>
      </View>
      <View style={[styles.mobileThanhTmKim, styles.mobileFlexBox]}>
        <Text
          style={[styles.lpHc1, styles.labelLayout]}
        >{`Lớp học hoạt động `}</Text>
        <View style={[styles.mobileThanhTmKimChild, styles.component3Layout]} />
        <Text style={[styles.lp, styles.lpTypo]}>{`4 lớp `}</Text>
        <View style={styles.input}>
          <View style={styles.surface}>
            <View style={[styles.fill, styles.fillBorder]} />
          </View>
          <Text style={[styles.placeholder, styles.lpTypo]}>Tìm kiếm</Text>
          <Image
            style={[styles.searchIcon, styles.placeholderPosition]}
            resizeMode="cover"
            source={require("../assets/search-icon11.png")}
          />
        </View>
        <View style={[styles.component3, styles.component3Layout]}>
          <View style={[styles.component3Inner, styles.fillPosition1]}>
            <View style={styles.dropdownWrapper}>
              <View style={styles.dropdown}>
                <View style={[styles.focus, styles.focusPosition]} />
                <Text style={[styles.label1, styles.label1Position]}>
                  Lớp học
                </Text>
                <Image
                  style={[styles.icon12, styles.icon12Position]}
                  resizeMode="cover"
                  source={require("../assets/icon2.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.dropdownMenu, styles.focus1Position]}>
            <View style={styles.dropdownParent}>
              <View style={styles.dropdown1}>
                <View style={[styles.focus1, styles.focus1Position]} />
                <Text style={[styles.label2, styles.icon12Position]}>
                  Hiện tại
                </Text>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.dropdownParent}>
                  <View style={styles.dropdown2}>
                    <Text style={[styles.label3, styles.lp9ATypo]}>
                      Kết thúc
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.mobileLpHc1, styles.mobileLayout]}>
        <View style={styles.mobileLpHcChild} />
        <Pressable
          style={[styles.icon2, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileXaLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/3-icon11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon4, styles.iconSpaceBlock]}
          onPress={() => navigation.navigate("MobileChnhSaLp")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icon101.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon6, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileThnhCng4")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/2-icon11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon8, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileKtThcLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/2-icon21.png")}
          />
        </Pressable>
        <View style={[styles.icon10, styles.lp9APosition]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icon111.png")}
          />
          <Text style={[styles.label, styles.labelLayout1]}>Hoạt động</Text>
        </View>
        <Text style={[styles.lp9A, styles.lp9ATypo]}>Lớp 9 A 13</Text>
        <Image
          style={styles.image15Icon}
          resizeMode="cover"
          source={require("../assets/image-1511.png")}
        />
        <Text
          style={[styles.vnHcNgh, styles.placeholderTypo]}
        >{`Văn học nghệ thuật đương đại `}</Text>
        <Text style={[styles.hcSinh, styles.placeholderTypo]}>
          23/30 học sinh
        </Text>
      </View>
      <View style={[styles.mobileLpHc2, styles.mobileLayout]}>
        <View style={styles.mobileLpHcChild} />
        <Pressable
          style={[styles.icon2, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileXaLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/3-icon11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon4, styles.iconSpaceBlock]}
          onPress={() => navigation.navigate("MobileChnhSaLp")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icon101.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon6, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileThnhCng4")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/2-icon11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon8, styles.iconPosition]}
          onPress={() => navigation.navigate("MobileKtThcLp")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/2-icon21.png")}
          />
        </Pressable>
        <View style={[styles.icon10, styles.lp9APosition]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icon111.png")}
          />
          <Text style={[styles.label, styles.labelLayout1]}>Hoạt động</Text>
        </View>
        <Text style={[styles.lp9A, styles.lp9ATypo]}>Lớp 9 A 13</Text>
        <Image
          style={styles.image15Icon}
          resizeMode="cover"
          source={require("../assets/image-1511.png")}
        />
        <Text
          style={[styles.vnHcNgh, styles.placeholderTypo]}
        >{`Văn học nghệ thuật đương đại `}</Text>
        <Text style={[styles.hcSinh, styles.placeholderTypo]}>
          23/30 học sinh
        </Text>
      </View>
      <View style={[styles.modalElementsScreen, styles.dropdown3Border]}>
        <View style={[styles.rectangle, styles.modalPosition1]} />
      </View>
      <View style={[styles.modalParent, styles.modalPosition]}>
        <View style={[styles.modal, styles.modalPosition1]}>
          <View style={[styles.modal1, styles.modal1Position]}>
            <Image
              style={styles.fillIcon}
              resizeMode="cover"
              source={require("../assets/fill61.png")}
            />
            <Pressable
              style={[styles.icon33, styles.icon33Position]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/icon21.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.footer, styles.footerPosition]}>
            <View style={[styles.buttonParent, styles.icon35Layout]}>
              <Pressable
                style={[styles.button, styles.buttonLayout]}
                onPress={() => navigation.goBack()}
              >
                <Text style={[styles.label6, styles.labelLayout1]}>Hủy</Text>
              </Pressable>
              <Pressable
                style={[styles.button1, styles.buttonLayout]}
                onPress={() => navigation.navigate("MobileChinhSaThnhCng")}
              >
                <Text style={[styles.label7, styles.labelLayout1]}>Lưu</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.titleParent}>
            <Text style={[styles.title, styles.labelTypo1]}>
              Chỉnh sửa lớp học
            </Text>
            <Text style={[styles.subtitle, styles.placeholderTypo]}>
              hãy điền đầy đủ thông tin
            </Text>
          </View>
          <Image
            style={[styles.icon35, styles.icon35Layout]}
            resizeMode="cover"
            source={require("../assets/icon61.png")}
          />
        </View>
        <View style={styles.input1}>
          <Text style={[styles.counter, styles.modal1Position]}>0/200 câu</Text>
          <View style={[styles.surface1, styles.surface1Position]}>
            <View style={[styles.fill1, styles.fillBorder]} />
          </View>
          <Image
            style={[styles.textFieldElementsResi, styles.surface1Position]}
            resizeMode="cover"
            source={require("../assets/text-field---elements--resize11.png")}
          />
          <Text style={[styles.placeholder1, styles.placeholderPosition]}>
            học hành là quan trọng là tiềm năng , là mệt mỏi , là chán đời , là
            linh tinh ,...
          </Text>
          <Text style={[styles.label8, styles.labelLayout]}>{`Mô tả `}</Text>
        </View>
        <View style={[styles.input2, styles.inputPosition]}>
          <View style={[styles.surface2, styles.surfacePosition]}>
            <View style={[styles.fill1, styles.fillBorder]} />
          </View>
          <Text style={[styles.placeholder2, styles.placeholderPosition]}>
            9 A13
          </Text>
          <Text style={[styles.label9, styles.labelLayout]}>
            <Text style={styles.lp1}>{`Lớp `}</Text>
            <Text style={styles.text}>*</Text>
          </Text>
        </View>
        <View style={[styles.dateInput, styles.inputPosition]}>
          <View style={[styles.surface2, styles.surfacePosition]}>
            <View style={[styles.fill1, styles.fillBorder]} />
          </View>
          <View style={[styles.dropdown3, styles.footerPosition]}>
            <View style={[styles.fill4, styles.fillPosition]} />
            <Image
              style={[styles.icon36, styles.label1Position]}
              resizeMode="cover"
              source={require("../assets/icon221.png")}
            />
          </View>
          <Text style={[styles.placeholder2, styles.placeholderPosition]}>
            20/01/2002
          </Text>
          <Text style={[styles.label8, styles.labelLayout]}>Ngày bắt đầu</Text>
        </View>
        <View style={styles.input3}>
          <View style={[styles.surface4, styles.surfacePosition]}>
            <View style={[styles.fill5, styles.fillPosition]} />
          </View>
          <Text style={[styles.placeholder4, styles.placeholderPosition]}>
            <Text style={styles.btQuynTruy}>Bật quyền truy cập mã lớp</Text>
            <Text style={styles.btKAi}>
              Bất kỳ ai có mã lớp đều có quyền yêu cầu tham gia lớp học
            </Text>
          </Text>
          <Text style={[styles.label8, styles.labelLayout]}>
            Truy cập lớp thông qua liên kết
          </Text>
        </View>
        <View style={styles.switch}>
          <View style={[styles.fill6, styles.iconLayout2]} />
          <View style={styles.thumb}>
            <View style={[styles.fill7, styles.fill7ShadowBox]} />
          </View>
        </View>
        <View style={[styles.dateInput1, styles.inputPosition]}>
          <View style={[styles.surface2, styles.surfacePosition]}>
            <View style={[styles.fill1, styles.fillBorder]} />
          </View>
          <View style={[styles.dropdown3, styles.footerPosition]}>
            <View style={[styles.fill4, styles.fillPosition]} />
            <Image
              style={[styles.icon36, styles.label1Position]}
              resizeMode="cover"
              source={require("../assets/icon231.png")}
            />
          </View>
          <Text style={[styles.placeholder2, styles.placeholderPosition]}>
            30/01/2002
          </Text>
          <Text style={[styles.label8, styles.labelLayout]}>Ngày hết hạn</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fillPosition2: {
    top: 0,
    left: 0,
  },
  modalPosition1: {
    bottom: "0%",
    top: "0%",
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
  labelTypo1: {
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    textAlign: "left",
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
  labelLayout1: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  mobileLayout: {
    height: 170,
    width: 380,
    left: 25,
    position: "absolute",
  },
  iconPosition: {
    height: "17.88%",
    width: "7.95%",
    bottom: "12.47%",
    top: "69.65%",
    position: "absolute",
  },
  iconSpaceBlock: {
    padding: Padding.p_5xs,
    justifyContent: "center",
  },
  lp9APosition: {
    top: "5.94%",
    height: "19.06%",
    alignItems: "center",
    position: "absolute",
  },
  lp9ATypo: {
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  placeholderTypo: {
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
  },
  labelLayout: {
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
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
  fillBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  placeholderPosition: {
    left: 8,
    position: "absolute",
  },
  fillPosition1: {
    right: "0%",
    left: "0%",
  },
  focusPosition: {
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
    borderWidth: 2,
    borderStyle: "solid",
  },
  label1Position: {
    top: "50%",
    position: "absolute",
  },
  icon12Position: {
    left: 16,
    top: "50%",
    position: "absolute",
  },
  focus1Position: {
    display: "none",
    position: "absolute",
  },
  dropdown3Border: {
    borderColor: Color.colorDarkviolet,
    borderWidth: 1,
    borderStyle: "solid",
  },
  modalPosition: {
    left: "0.23%",
    right: "-0.23%",
    position: "absolute",
    width: "100%",
  },
  modal1Position: {
    right: 0,
    position: "absolute",
  },
  icon33Position: {
    right: 16,
    top: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  footerPosition: {
    right: 1,
    bottom: 1,
    position: "absolute",
  },
  icon35Layout: {
    height: 48,
    position: "absolute",
  },
  buttonLayout: {
    paddingVertical: Padding.p_sm_5,
    width: 144,
    height: 48,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  surface1Position: {
    bottom: 24,
    right: 0,
    position: "absolute",
  },
  inputPosition: {
    height: "7.53%",
    left: "10.58%",
    right: "8.21%",
    width: "81.21%",
    position: "absolute",
  },
  surfacePosition: {
    top: 24,
    opacity: 0.99,
    left: 0,
  },
  fillPosition: {
    bottom: 0,
    right: 0,
  },
  iconLayout2: {
    borderRadius: Border.br_xs,
    height: "100%",
    width: "100%",
  },
  fill7ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  component2Child: {
    backgroundColor: Color.colorGray_100,
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
    height: 46,
    width: 48,
  },
  van: {
    color: Color.stroke2nd,
    marginLeft: 16,
    textAlign: "left",
    lineHeight: 36,
    fontSize: FontSize.h1Bold_size,
    fontWeight: "700",
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
  mobileLpHcChild: {
    borderColor: Color.gray90,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icon2: {
    left: "83.29%",
    right: "8.76%",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  icon4: {
    right: "36.08%",
    left: "55.97%",
    height: "17.88%",
    width: "7.95%",
    bottom: "12.47%",
    top: "69.65%",
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    padding: Padding.p_5xs,
  },
  icon6: {
    right: "49.87%",
    left: "42.18%",
  },
  icon8: {
    left: "69.76%",
    right: "22.29%",
  },
  label: {
    marginLeft: 8,
    color: Color.green70,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  icon10: {
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
    display: "flex",
    top: "5.94%",
    height: "19.06%",
    alignItems: "center",
    position: "absolute",
    left: "42.18%",
  },
  image15Icon: {
    height: "59.53%",
    width: "25.13%",
    top: "19.06%",
    right: "66.66%",
    bottom: "21.41%",
    left: "8.21%",
    borderRadius: Border.br_xl,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vnHcNgh: {
    width: "45.89%",
    top: "28.59%",
    color: Color.gray10,
    height: "11.88%",
    fontFamily: FontFamily.h5Regular,
    display: "flex",
    left: "42.18%",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  hcSinh: {
    width: "23.34%",
    top: "45.24%",
    height: "11.88%",
    fontFamily: FontFamily.h5Regular,
    display: "flex",
    left: "42.18%",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
    color: Color.green70,
  },
  mobileLpHc: {
    top: 210,
  },
  lpHc1: {
    width: 70,
    height: 39,
    display: "flex",
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    alignItems: "center",
  },
  mobileThanhTmKimChild: {
    borderColor: Color.colorSilver,
    borderRightWidth: 2,
    width: 2,
    borderStyle: "solid",
  },
  lp: {
    width: 34,
    height: 20,
    display: "flex",
    marginLeft: 8,
    alignItems: "center",
  },
  fill: {
    borderRadius: Border.br_3xs,
    borderColor: Color.gray60,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  surface: {
    opacity: 0.99,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  placeholder: {
    top: 6,
    left: 40,
    position: "absolute",
  },
  searchIcon: {
    top: 4,
    height: 24,
    width: 24,
  },
  input: {
    width: 170,
    marginLeft: 8,
    height: 32,
  },
  focus: {
    borderColor: Color.blue60,
    position: "absolute",
  },
  label1: {
    left: 48,
    marginTop: -10,
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
  },
  icon12: {
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
    width: "100%",
  },
  focus1: {
    borderColor: Color.white,
    borderRadius: Border.br_7xs,
    left: -3,
    bottom: -3,
    right: -3,
    top: -3,
    borderWidth: 2,
    borderStyle: "solid",
  },
  label2: {
    width: 66,
    marginTop: -10,
    color: Color.gray20,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
  },
  dropdown1: {
    alignSelf: "stretch",
    height: 32,
    backgroundColor: Color.white,
  },
  label3: {
    lineHeight: 21,
    fontSize: FontSize.h4Bold_size,
    flex: 1,
  },
  dropdown2: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_base,
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
    shadowRadius: 5,
    elevation: 5,
    borderColor: Color.gray80,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_11xs,
  },
  component3: {
    width: 98,
  },
  mobileThanhTmKim: {
    top: 90,
    borderTopWidth: 1,
    height: 70,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    borderColor: Color.colorDimgray,
    left: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    width: 430,
  },
  mobileLpHc1: {
    top: 430,
  },
  mobileLpHc2: {
    top: 650,
  },
  rectangle: {
    backgroundColor: Color.gray80,
    opacity: 0.7,
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  modalElementsScreen: {
    left: "0.23%",
    right: "-0.23%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  fillIcon: {
    borderRadius: Border.br_9xs,
    bottom: 1,
    right: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icon33: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    height: 32,
    position: "absolute",
  },
  modal1: {
    bottom: -1,
    left: 0,
    top: 0,
  },
  label6: {
    color: Color.gray10,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  button: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderColor: Color.colorDimgray,
  },
  label7: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
  },
  button1: {
    backgroundColor: Color.primaryColorDefault40,
    marginLeft: 16,
  },
  buttonParent: {
    width: 304,
    right: 16,
    top: 16,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  footer: {
    height: 80,
    borderRadius: Border.br_9xs,
    left: 1,
    backgroundColor: Color.gray90,
  },
  title: {
    color: Color.gray10,
    textAlign: "left",
    lineHeight: 36,
    fontSize: FontSize.h1Bold_size,
    fontWeight: "700",
  },
  subtitle: {
    width: 351,
    color: Color.gray10,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  titleParent: {
    top: 46,
    right: 48,
    left: 104,
    position: "absolute",
  },
  icon35: {
    top: 40,
    left: 40,
    width: 48,
  },
  modal: {
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  counter: {
    bottom: 4,
    textAlign: "right",
    alignItems: "flex-end",
    width: 101,
    color: Color.gray10,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    display: "flex",
  },
  fill1: {
    borderRadius: Border.br_11xs,
    borderColor: Color.gray60,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  surface1: {
    top: 24,
    opacity: 0.99,
    left: 0,
  },
  textFieldElementsResi: {
    width: 9,
    height: 9,
  },
  placeholder1: {
    top: 28,
    width: 333,
    color: Color.gray60,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
  },
  label8: {
    color: Color.gray10,
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  input1: {
    height: "17.2%",
    top: "30.77%",
    bottom: "52.03%",
    left: "10.58%",
    right: "8.21%",
    width: "81.21%",
    position: "absolute",
  },
  surface2: {
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  placeholder2: {
    top: 30,
    color: Color.gray60,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
  },
  lp1: {
    color: Color.gray10,
  },
  text: {
    color: Color.red40,
  },
  label9: {
    textAlign: "left",
    fontFamily: FontFamily.h1Bold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  input2: {
    top: "19.09%",
    bottom: "73.39%",
  },
  fill4: {
    borderRadius: Border.br_11xs,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.gray90,
  },
  icon36: {
    marginTop: -11.5,
    marginLeft: -12,
    left: "50%",
    height: 24,
    width: 24,
  },
  dropdown3: {
    top: 25,
    width: 30,
    borderColor: Color.colorDarkviolet,
    borderWidth: 1,
    borderStyle: "solid",
  },
  dateInput: {
    top: "52.14%",
    bottom: "40.33%",
  },
  fill5: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
  },
  surface4: {
    display: "none",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  btQuynTruy: {
    color: Color.colorDimgray,
  },
  btKAi: {
    color: Color.gray60,
  },
  placeholder4: {
    top: 21,
    fontFamily: FontFamily.h5Regular,
    lineHeight: 20,
    fontSize: FontSize.h5Regular_size,
    textAlign: "left",
  },
  input3: {
    height: "8%",
    width: "87.63%",
    top: "75.57%",
    right: "1.91%",
    bottom: "16.43%",
    left: "10.47%",
    position: "absolute",
  },
  fill6: {
    backgroundColor: Color.primaryColorDefault40,
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  fill7: {
    borderRadius: 8,
    shadowRadius: 2,
    elevation: 2,
    borderColor: Color.gray60,
    position: "absolute",
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  thumb: {
    height: "66.67%",
    width: "33.4%",
    top: "16.67%",
    right: "8.15%",
    bottom: "16.67%",
    left: "58.45%",
    position: "absolute",
  },
  switch: {
    height: "3.43%",
    width: "11.42%",
    top: "77.29%",
    right: "8.12%",
    bottom: "19.29%",
    left: "80.47%",
    position: "absolute",
  },
  dateInput1: {
    top: "63.83%",
    bottom: "28.64%",
  },
  modalParent: {
    height: "75.11%",
    top: "12.34%",
    bottom: "12.55%",
  },
  mobileChnhSaLp: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.gray90,
  },
});

export default MobileChnhSaLp;
