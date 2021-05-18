import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_9_745}>
        <View style={styles.View_9_746} />
        <View style={styles.View_9_747}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6200/998b/5e25cc2fb8f47e9fd11a0f1d4833e95c"
            }}
            style={styles.ImageBackground_9_748}
          />
          <View style={styles.View_9_749}>
            <Text style={styles.Text_9_749}>DETAILS</Text>
          </View>
        </View>
        <View style={styles.View_9_750}>
          <Text style={styles.Text_9_750}>$425</Text>
        </View>
        <View style={styles.View_9_751}>
          <Text style={styles.Text_9_751}>
            Boost your earnings with only 2 more approved apps
          </Text>
        </View>
        <View style={styles.View_9_752}>
          <View style={styles.View_9_753}>
            <Text style={styles.Text_9_753}>10</Text>
          </View>
          <View style={styles.View_9_754} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c65/8799/a6321a36823e6b3adae59ed50e04cadf"
            }}
            style={styles.ImageBackground_9_755}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e3d/15ff/9e27324c059b566f7cf18842eeef0147"
            }}
            style={styles.ImageBackground_9_756}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cb/3311/b181e2d1eca5081d0dceed67de07aa4f"
            }}
            style={styles.ImageBackground_9_757}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cb/3311/b181e2d1eca5081d0dceed67de07aa4f"
            }}
            style={styles.ImageBackground_9_758}
          />
        </View>
        <View style={styles.View_9_759}>
          <Text style={styles.Text_9_759}>Mar-Apr Bonus Period</Text>
        </View>
        <View style={styles.View_9_760}>
          <Text style={styles.Text_9_760}>44 Days Left</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa86/0acc/8015bfd4c9ac52591c1e8f891aa7573a"
          }}
          style={styles.ImageBackground_9_761}
        />
      </View>
      <View style={styles.View_9_762}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2066/70ff/a6a72b5ba0e82a3b735ee7203f9f561f"
          }}
          style={styles.ImageBackground_9_763}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0722/9594/05b48e7b4d41f6cfa8a40a1e28b46598"
          }}
          style={styles.ImageBackground_9_764}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f4/ce48/5281ae67ecee5884cb15f063e3393590"
          }}
          style={styles.ImageBackground_9_765}
        />
      </View>
      <View style={styles.View_9_766}>
        <View style={styles.View_9_767}>
          <Text style={styles.Text_9_767}>$4,825</Text>
        </View>
        <View style={styles.View_9_768}>
          <Text style={styles.Text_9_768}>Cash Earnings Paid to Date</Text>
        </View>
      </View>
      <View style={styles.View_9_769}>
        <Text style={styles.Text_9_769}>Member for 2 Years and 3 Months</Text>
      </View>
      <View style={styles.View_9_993}>
        <View style={styles.View_9_994}>
          <Text style={styles.Text_9_994}>$425</Text>
        </View>
        <View style={styles.View_9_995}>
          <View style={styles.View_9_996}>
            <Text style={styles.Text_9_996}>13</Text>
          </View>
          <View style={styles.View_9_997}>
            <Text style={styles.Text_9_997}>Applications Received</Text>
          </View>
        </View>
        <View style={styles.View_9_998}>
          <View style={styles.View_9_999}>
            <Text style={styles.Text_9_999}>8</Text>
          </View>
          <View style={styles.View_9_1000}>
            <Text style={styles.Text_9_1000}>Applications Approved</Text>
          </View>
        </View>
        <View style={styles.View_9_1001} />
        <View style={styles.View_9_1002}>
          <View style={styles.View_9_1003} />
          <View style={styles.View_9_1004}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a5/f47f/9ba06db22ede15a5a703e3d98788d642"
              }}
              style={styles.ImageBackground_9_1005}
            />
            <View style={styles.View_9_1006}>
              <Text style={styles.Text_9_1006}>DETAILS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_9_1007}>
          <Text style={styles.Text_9_1007}>Your Projected April Earnings</Text>
        </View>
        <View style={styles.View_9_1008}>
          <Text style={styles.Text_9_1008}>Your Current Activity</Text>
        </View>
        <View style={styles.View_9_1009}>
          <View style={styles.View_9_1010}>
            <Text style={styles.Text_9_1010}>$400</Text>
          </View>
          <View style={styles.View_9_1011}>
            <Text style={styles.Text_9_1011}>8 apps x $50 base</Text>
          </View>
        </View>
        <View style={styles.View_9_1012}>
          <View style={styles.View_9_1013}>
            <Text style={styles.Text_9_1013}>$25</Text>
          </View>
          <View style={styles.View_9_1014}>
            <Text style={styles.Text_9_1014}>Requalification Promo</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_771}>
        <Text style={styles.Text_9_771}>Hi Joy,</Text>
      </View>
      <View style={styles.View_9_772}>
        <View style={styles.View_9_773}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8d0/836b/4807dee82abe6034bc8d7c920eb63147"
            }}
            style={styles.ImageBackground_9_774}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f2a/4fa1/3465918576014c82cbf893650e1be125"
            }}
            style={styles.ImageBackground_9_792}
          />
        </View>
      </View>
      <View style={styles.View_9_793}>
        <View style={styles.View_9_794}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8d0/836b/4807dee82abe6034bc8d7c920eb63147"
            }}
            style={styles.ImageBackground_9_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f2a/4fa1/3465918576014c82cbf893650e1be125"
            }}
            style={styles.ImageBackground_9_813}
          />
        </View>
      </View>
      <View style={styles.View_9_977}>
        <View style={styles.View_9_978}>
          <Text style={styles.Text_9_978}>Boost Your Earnings </Text>
        </View>
        <View style={styles.View_9_979}>
          <Text style={styles.Text_9_979}>Approved Apps</Text>
        </View>
        <View style={styles.View_9_980}>
          <Text style={styles.Text_9_980}>+2</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7348/f959/81c72a07c45a96b69cde7aceb43aadff"
          }}
          style={styles.ImageBackground_9_981}
        />
        <View style={styles.View_9_982}>
          <Text style={styles.Text_9_982}>Mar-Apr Bonus Period</Text>
        </View>
        <View style={styles.View_9_983}>
          <Text style={styles.Text_9_983}>44 Days Left</Text>
        </View>
        <View style={styles.View_9_987}>
          <View style={styles.View_9_988}>
            <View style={styles.View_9_989}>
              <Text style={styles.Text_9_989}>SEE HOW</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_9_815}>
        <View style={styles.View_9_816}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f6b/0462/2857ad07aa3d278d19a1062a5f672dfe"
            }}
            style={styles.ImageBackground_9_817}
          />
          <View style={styles.View_9_818}>
            <Text style={styles.Text_9_818}>PAYCHECKS </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_9_819}>
        <View style={styles.View_I9_819_707_260}>
          <View style={styles.View_I9_819_1539_39192}>
            <View style={styles.View_I9_819_707_390}>
              <View style={styles.View_I9_819_707_377} />
              <View style={styles.View_I9_819_707_389}>
                <View style={styles.View_I9_819_707_268}>
                  <View style={styles.View_I9_819_707_269}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a99/5d88/273f7cb73f6b3d485298c1957428c33d"
                      }}
                      style={styles.ImageBackground_I9_819_707_270}
                    />
                    <View style={styles.View_I9_819_707_271} />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47dc/fb23/05bda70843fc068b01780166ce8473f9"
                  }}
                  style={styles.ImageBackground_I9_819_1290_2774}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I9_819_1539_42772} />
        </View>
      </View>
      <View style={styles.View_9_942}>
        <View style={styles.View_9_943}>
          <View style={styles.View_9_944}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7fe/a721/bd3be91304f72cbe3ef238d40b66f083"
              }}
              style={styles.ImageBackground_9_945}
            />
            <View style={styles.View_9_950}>
              <View style={styles.View_9_951}>
                <Text style={styles.Text_9_951}>Home</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_9_952}>
            <View style={styles.View_9_953}>
              <View style={styles.View_9_954}>
                <Text style={styles.Text_9_954}>+</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e005/fb21/077275f4502b1956f3c42e7edfac19f2"
                }}
                style={styles.ImageBackground_9_955}
              />
            </View>
            <View style={styles.View_9_960}>
              <Text style={styles.Text_9_960}>Earn</Text>
            </View>
          </View>
          <View style={styles.View_9_961}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8068/7702/a372d88bb4a8f1bb87f25e716bd9cab1"
              }}
              style={styles.ImageBackground_9_962}
            />
            <View style={styles.View_9_969}>
              <Text style={styles.Text_9_969}>Offer</Text>
            </View>
          </View>
          <View style={styles.View_9_970}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ea7/2e2d/b40bdb1d4dccf3214a21b255d5e9bcf7"
              }}
              style={styles.ImageBackground_9_971}
            />
            <View style={styles.View_9_976}>
              <Text style={styles.Text_9_976}>More</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_9_821} />
      <View style={styles.View_9_822}>
        <View style={styles.View_I9_822_917_3036}>
          <View style={styles.View_I9_822_917_2263}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca1/7cff/22f75415e2c376471e6ede6f8eaafab9"
              }}
              style={styles.ImageBackground_I9_822_917_2136}
            />
            <View style={styles.View_I9_822_705_69}>
              <View style={styles.View_I9_822_705_70}>
                <Text style={styles.Text_I9_822_705_70}>My Earnings</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I9_822_917_2693}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05eb/2bc4/aadf04a28cd034a7859f119c5c7fc390"
              }}
              style={styles.ImageBackground_I9_822_917_2594}
            />
            <View style={styles.View_I9_822_705_53}>
              <Text style={styles.Text_I9_822_705_53}>Earn More</Text>
            </View>
          </View>
          <View style={styles.View_I9_822_917_2963}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05eb/2bc4/aadf04a28cd034a7859f119c5c7fc390"
              }}
              style={styles.ImageBackground_I9_822_917_2964}
            />
            <View style={styles.View_I9_822_917_2965}>
              <Text style={styles.Text_I9_822_917_2965}> Current offer</Text>
            </View>
          </View>
          <View style={styles.View_I9_822_1029_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05eb/2bc4/aadf04a28cd034a7859f119c5c7fc390"
              }}
              style={styles.ImageBackground_I9_822_1029_6}
            />
            <View style={styles.View_I9_822_1029_7}>
              <Text style={styles.Text_I9_822_1029_7}>More</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_9_745: {
    flexGrow: 1,
    width: wp("92.27054614375754%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-732.1256038647343%"),
    top: hp("59.42622950819673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_746: {
    flexGrow: 1,
    width: wp("92.27054614375754%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0000010422670086995822%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 24
  },
  View_9_747: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28985507246375%"),
    top: hp("20.901639344262293%")
  },
  ImageBackground_9_748: {
    width: wp("1.4492758230310707%"),
    minWidth: wp("1.4492758230310707%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429958%"),
    top: hp("0%")
  },
  View_9_749: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_9_749: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  View_9_750: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.18357487922708%"),
    top: hp("14.344261252814945%")
  },
  Text_9_750: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  View_9_751: {
    width: wp("48.55072463768116%"),
    minWidth: wp("48.55072463768116%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033908%"),
    top: hp("9.289616444071783%")
  },
  Text_9_751: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_9_752: {
    flexGrow: 1,
    width: wp("76.57004830917874%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033908%"),
    top: hp("23.360655737704917%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_753: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434753%"),
    top: hp("-1.639344262295083%")
  },
  Text_9_753: {
    color: "rgba(52, 52, 52, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.48,
    textTransform: "none"
  },
  View_9_754: {
    flexGrow: 1,
    width: wp("74.63768115942028%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.93236714975842%"),
    top: hp("4.644808743169392%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_9_755: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.869565217391255%"),
    top: hp("6.147540983606561%")
  },
  ImageBackground_9_756: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.09661835748784%"),
    top: hp("6.147540983606561%")
  },
  ImageBackground_9_757: {
    width: wp("3.6954076857061983e-7%"),
    minWidth: wp("3.6954076857061983e-7%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352552%"),
    top: hp("4.644808743169392%")
  },
  ImageBackground_9_758: {
    width: wp("3.6954186699417274e-7%"),
    minWidth: wp("3.6954186699417274e-7%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.8888888888888%"),
    top: hp("4.644808743169392%")
  },
  View_9_759: {
    width: wp("35.990338164251206%"),
    minWidth: wp("35.990338164251206%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314077%"),
    top: hp("3.825135569754842%")
  },
  Text_9_759: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_9_760: {
    width: wp("21.497584541062803%"),
    minWidth: wp("21.497584541062803%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.80193236714979%"),
    top: hp("3.415299504181071%")
  },
  Text_9_760: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  ImageBackground_9_761: {
    flexGrow: 1,
    width: wp("76.57004830917874%"),
    height: hp("0.0000037859317274379944%"),
    minHeight: hp("0.0000037859317274379944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033908%"),
    top: hp("7.786884203634628%")
  },
  View_9_762: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-720.0483091787439%"),
    top: hp("84.97267759562843%")
  },
  ImageBackground_9_763: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_9_764: {
    width: wp("2.001614040798611%"),
    minWidth: wp("2.001614040798611%"),
    height: hp("2.1114788420213375%"),
    minHeight: hp("2.1114788420213375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835712%"),
    top: hp("1.6960811093856734%")
  },
  ImageBackground_9_765: {
    width: wp("2.001613810442496%"),
    minWidth: wp("2.001613810442496%"),
    height: hp("2.111478711737961%"),
    minHeight: hp("2.111478711737961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3150900135868824%"),
    top: hp("1.6960852784537082%")
  },
  View_9_766: {
    width: wp("48.792270531400966%"),
    minWidth: wp("48.792270531400966%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.34299516908212%"),
    top: hp("26.366120218579237%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_767: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("0%")
  },
  Text_9_767: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.6,
    textTransform: "none"
  },
  View_9_768: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.13661202185792476%")
  },
  Text_9_768: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "none"
  },
  View_9_769: {
    width: wp("49.033816425120776%"),
    minWidth: wp("49.033816425120776%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.10144927536232%"),
    top: hp("22.950819672131146%")
  },
  Text_9_769: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  View_9_993: {
    flexGrow: 1,
    width: wp("92.27053140096618%"),
    height: hp("45.3551912568306%"),
    minHeight: hp("45.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("41.53005464480874%"),
    backgroundColor: "rgba(48, 48, 48, 1)",
    overflow: "hidden"
  },
  View_9_994: {
    width: wp("26.811594202898554%"),
    minWidth: wp("26.811594202898554%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("7.240437158469945%")
  },
  Text_9_994: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.04,
    textTransform: "none"
  },
  View_9_995: {
    width: wp("26.08695652173913%"),
    minWidth: wp("26.08695652173913%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("36.88524590163934%")
  },
  View_9_996: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_9_996: {
    color: "rgba(184, 184, 184, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_9_997: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913045%"),
    top: hp("0.2732240437158566%")
  },
  Text_9_997: {
    color: "rgba(184, 184, 184, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  View_9_998: {
    width: wp("24.879227053140095%"),
    minWidth: wp("24.879227053140095%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.42028985507246%"),
    top: hp("36.88524590163934%")
  },
  View_9_999: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_9_999: {
    color: "rgba(184, 184, 184, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_9_1000: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714972%"),
    top: hp("0.2732240437158566%")
  },
  Text_9_1000: {
    color: "rgba(184, 184, 184, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  View_9_1001: {
    flexGrow: 1,
    width: wp("92.27053140096618%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.82513661202185%"),
    backgroundColor: "rgba(122, 122, 122, 1)"
  },
  View_9_1002: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.70048309178743%"),
    top: hp("13.387978142076506%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_1003: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(123, 123, 123, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_9_1004: {
    width: wp("17.26211326709692%"),
    minWidth: wp("17.26211326709692%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4492753623188435%"),
    top: hp("1.775956284153004%")
  },
  ImageBackground_9_1005: {
    width: wp("3.7355432187877415%"),
    minWidth: wp("3.7355432187877415%"),
    height: hp("1.1728630691278175%"),
    minHeight: hp("1.1728630691278175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.526570048309182%"),
    top: hp("0.21323636581337269%")
  },
  View_9_1006: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_9_1006: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  View_9_1007: {
    width: wp("46.61835748792271%"),
    minWidth: wp("46.61835748792271%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("2.322404371584696%")
  },
  Text_9_1007: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_9_1008: {
    width: wp("33.57487922705314%"),
    minWidth: wp("33.57487922705314%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("31.420765027322403%")
  },
  Text_9_1008: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_9_1009: {
    width: wp("43.96135265700483%"),
    minWidth: wp("43.96135265700483%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("19.26229508196721%")
  },
  View_9_1010: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_9_1010: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.48,
    textTransform: "none"
  },
  View_9_1011: {
    width: wp("28.26086956521739%"),
    minWidth: wp("28.26086956521739%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.700483091787438%"),
    top: hp("0.6830601092896202%")
  },
  Text_9_1011: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_9_1012: {
    width: wp("47.34299516908212%"),
    minWidth: wp("47.34299516908212%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990337%"),
    top: hp("23.087431693989075%")
  },
  View_9_1013: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_9_1013: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.48,
    textTransform: "none"
  },
  View_9_1014: {
    width: wp("36.231884057971016%"),
    minWidth: wp("36.231884057971016%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.111111111111112%"),
    top: hp("0.6830601092896131%")
  },
  Text_9_1014: {
    color: "rgba(188, 188, 188, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_9_771: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: hp("34.56284153005464%")
  },
  Text_9_771: {
    color: "rgba(48, 48, 48, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  View_9_772: {
    width: wp("57.971014492753625%"),
    minWidth: wp("57.971014492753625%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_9_773: {
    width: wp("57.971014492753625%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_774: {
    width: wp("57.971014492753625%"),
    height: hp("2.1765424905578947%"),
    top: hp("0.4827655729700311%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_792: {
    width: wp("0.08567036062047101%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.16965532533212%")
  },
  View_9_793: {
    width: wp("57.971014492753625%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("8.60655737704918%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_9_794: {
    width: wp("57.971014492753625%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_795: {
    width: wp("57.971014492753625%"),
    height: hp("2.1765424905578947%"),
    top: hp("0.4827655729700311%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_813: {
    width: wp("0.08567036062047101%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.16965532533212%")
  },
  View_9_977: {
    width: wp("92.9951690821256%"),
    minWidth: wp("92.9951690821256%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("98.36065573770492%"),
    backgroundColor: "rgba(232, 232, 232, 1)"
  },
  View_9_978: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753624%"),
    top: hp("5.464480874316948%")
  },
  Text_9_978: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_9_979: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.3913043478261%"),
    top: hp("5.601092896174876%")
  },
  Text_9_979: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_9_980: {
    width: wp("11.594202898550725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.64734299516908%"),
    top: hp("5.601092896174876%")
  },
  Text_9_980: {
    color: "rgba(53, 53, 53, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.9,
    textTransform: "none"
  },
  ImageBackground_9_981: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("4.234972677595621%")
  },
  View_9_982: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753624%"),
    top: hp("1.7759562841530112%")
  },
  Text_9_982: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  View_9_983: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.70048309178743%"),
    top: hp("1.2295081967213122%")
  },
  Text_9_983: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.28,
    textTransform: "none"
  },
  View_9_987: {
    flexGrow: 1,
    width: wp("77.29468599033817%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753624%"),
    top: hp("12.704918032786878%"),
    backgroundColor: "rgba(78, 78, 78, 1)"
  },
  View_9_988: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019323%"),
    top: hp("-0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_989: {
    width: wp("25.60386473429952%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.12077294685990125%")
  },
  Text_9_989: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_9_815: {
    width: wp("23.18840579710145%"),
    minWidth: wp("23.18840579710145%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94685990338165%"),
    top: hp("89.61748633879782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_816: {
    width: wp("23.18840579710145%"),
    minWidth: wp("23.18840579710145%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%")
  },
  ImageBackground_9_817: {
    width: wp("1.9323676104706842%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25603864734299%"),
    top: hp("0%")
  },
  View_9_818: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_9_818: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_9_819: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_819_707_260: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_819_1539_39192: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032787%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_819_707_390: {
    flexGrow: 1,
    width: wp("92.27053140096618%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_819_707_377: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633883%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_819_707_389: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.6086956521739%"),
    top: hp("0%")
  },
  View_I9_819_707_268: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I9_819_707_269: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I9_819_707_270: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I9_819_707_271: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1
  },
  ImageBackground_I9_819_1290_2774: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.483606557377049%"),
    minHeight: hp("3.483606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.65700483091787%"),
    top: hp("0.9221311475409832%")
  },
  View_I9_819_1539_42772: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_942: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("126.22950819672131%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_9_943: {
    width: wp("89.3719806763285%"),
    minWidth: wp("89.3719806763285%"),
    height: hp("5.440722397767781%"),
    minHeight: hp("5.440722397767781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_944: {
    width: wp("6.521739130434782%"),
    minWidth: wp("6.521739130434782%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_9_945: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.36231884057971087%")
  },
  View_9_950: {
    width: wp("6.521739130434782%"),
    minWidth: wp("6.521739130434782%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  View_9_951: {
    width: wp("6.521739130434782%"),
    minWidth: wp("6.521739130434782%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_9_951: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_9_952: {
    width: wp("6.521739130434782%"),
    minWidth: wp("6.521739130434782%"),
    height: hp("5.440722397767781%"),
    minHeight: hp("5.440722397767781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.099839583687164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_9_953: {
    width: wp("6.521739130434782%"),
    minWidth: wp("6.521739130434782%"),
    height: hp("3.5281538311900986%"),
    minHeight: hp("3.5281538311900986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_9_954: {
    width: wp("1.7013233065029272%"),
    minWidth: wp("1.7013233065029272%"),
    minHeight: hp("1.924447674568885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.820415478397678%"),
    top: hp("0%")
  },
  Text_9_954: {
    color: "rgba(156, 156, 156, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  ImageBackground_9_955: {
    width: wp("5.671077304416232%"),
    height: hp("3.2074125738091803%"),
    top: hp("0.32074308134819773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_960: {
    width: wp("4.5893719806763285%"),
    minWidth: wp("4.5893719806763285%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792242%"),
    top: hp("4.074601136921515%")
  },
  Text_9_960: {
    color: "rgba(156, 156, 156, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_9_961: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.19967916737432%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_9_962: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_969: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12077294685990125%"),
    top: hp("3.825136612021865%")
  },
  Text_9_969: {
    color: "rgba(156, 156, 156, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_9_970: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.57487922705313%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_9_971: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_976: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_9_976: {
    color: "rgba(156, 156, 156, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_9_821: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-735.9903381642513%"),
    top: hp("107.10382513661203%")
  },
  View_9_822: {
    flexGrow: 1,
    width: wp("92.512077294686%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-732.367149758454%"),
    top: hp("108.74316939890711%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I9_822_917_3036: {
    flexGrow: 1,
    width: wp("81.88405797101449%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835712%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I9_822_917_2263: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_822_917_2136: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2270531400965865%"),
    top: hp("0%")
  },
  View_I9_822_705_69: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%")
  },
  View_I9_822_705_70: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I9_822_705_70: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_I9_822_917_2693: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.362318840579746%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_822_917_2594: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5024154589370937%"),
    top: hp("0%")
  },
  View_I9_822_705_53: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%")
  },
  Text_I9_822_705_53: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_I9_822_917_2963: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.27536231884062%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_822_917_2964: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.951690821255966%"),
    top: hp("0%")
  },
  View_I9_822_917_2965: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%")
  },
  Text_I9_822_917_2965: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_I9_822_1029_5: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.08695652173913%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I9_822_1029_6: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.96618357487921%"),
    top: hp("0%")
  },
  View_I9_822_1029_7: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%")
  },
  Text_I9_822_1029_7: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_2: { height: 1008 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
