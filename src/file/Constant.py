from openai import OpenAI


class Constant:
    BASE_URL = "https://api.deepseek.com"
    MODEL = "deepseek-chat"
    SYSTEM_ROLE = "You are an experienced fortune-teller"
    DEFAULT_QUERY = "请根据中国传统命理学分析八字，并以 JSON 格式返回详细排盘信息，包括天干、地支、藏干、副星、星运、自坐、空亡、纳音、神煞等。"
    ERROR_MESSAGE = "Error occurred while processing the request."
    API_KEY = 'sk-7a4f554fde844054861941acbce554bf'
    AES_KEY = '20250208'
    #########################
    #  天干地支基表
    #########################
    TIANGAN_INFO = {
        "甲": {"wuxing": "木", "yinyang": "阳"},
        "乙": {"wuxing": "木", "yinyang": "阴"},
        "丙": {"wuxing": "火", "yinyang": "阳"},
        "丁": {"wuxing": "火", "yinyang": "阴"},
        "戊": {"wuxing": "土", "yinyang": "阳"},
        "己": {"wuxing": "土", "yinyang": "阴"},
        "庚": {"wuxing": "金", "yinyang": "阳"},
        "辛": {"wuxing": "金", "yinyang": "阴"},
        "壬": {"wuxing": "水", "yinyang": "阳"},
        "癸": {"wuxing": "水", "yinyang": "阴"},
    }

    DIZHI_INFO = {
        "子": {"wuxing": "水", "yinyang": "阳", "canggan": ["癸"]},
        "丑": {"wuxing": "土", "yinyang": "阴", "canggan": ["己", "癸", "辛"]},
        "寅": {"wuxing": "木", "yinyang": "阳", "canggan": ["甲", "丙", "戊"]},
        "卯": {"wuxing": "木", "yinyang": "阴", "canggan": ["乙"]},
        "辰": {"wuxing": "土", "yinyang": "阳", "canggan": ["戊", "乙", "癸"]},
        "巳": {"wuxing": "火", "yinyang": "阴", "canggan": ["丙", "戊", "庚"]},
        "午": {"wuxing": "火", "yinyang": "阳", "canggan": ["丁", "己"]},
        "未": {"wuxing": "土", "yinyang": "阴", "canggan": ["己", "丁", "乙"]},
        "申": {"wuxing": "金", "yinyang": "阳", "canggan": ["庚", "戊", "壬"]},
        "酉": {"wuxing": "金", "yinyang": "阴", "canggan": ["辛"]},
        "戌": {"wuxing": "土", "yinyang": "阳", "canggan": ["戊", "辛", "丁"]},
        "亥": {"wuxing": "水", "yinyang": "阴", "canggan": ["壬", "甲"]},
    }

    # 简化的十神(仅五行属性，不区分阴阳正偏)
    TEN_GOD_MAP = {
        "木": {
            "木": "比肩/劫财",  # 同行 -> 比劫
            "火": "食神/伤官",  # 木生火 -> 食伤
            "土": "正财/偏财",  # 木克土 -> 财
            "金": "正官/七杀",  # 金克木 -> 官杀
            "水": "正印/偏印",  # 水生木 -> 印
        },
        "火": {
            "火": "比肩/劫财",
            "土": "食神/伤官",
            "金": "正财/偏财",
            "水": "正官/七杀",
            "木": "正印/偏印",
        },
        "土": {
            "土": "比肩/劫财",
            "金": "食神/伤官",
            "水": "正财/偏财",
            "木": "正官/七杀",
            "火": "正印/偏印",
        },
        "金": {
            "金": "比肩/劫财",
            "水": "食神/伤官",
            "木": "正财/偏财",
            "火": "正官/七杀",
            "土": "正印/偏印",
        },
        "水": {
            "水": "比肩/劫财",
            "木": "食神/伤官",
            "火": "正财/偏财",
            "土": "正官/七杀",
            "金": "正印/偏印",
        },
    }

    # 纳音(60甲子)
    NAYIN_DICT = {
        "甲子": "海中金", "乙丑": "海中金",
        "丙寅": "炉中火", "丁卯": "炉中火",
        "戊辰": "大林木", "己巳": "大林木",
        "庚午": "路旁土", "辛未": "路旁土",
        "壬申": "剑锋金", "癸酉": "剑锋金",
        "甲戌": "山头火", "乙亥": "山头火",

        "丙子": "涧下水", "丁丑": "涧下水",
        "戊寅": "城头土", "己卯": "城头土",
        "庚辰": "白蜡金", "辛巳": "白蜡金",
        "壬午": "杨柳木", "癸未": "杨柳木",
        "甲申": "井泉水", "乙酉": "井泉水",
        "丙戌": "屋上土", "丁亥": "屋上土",

        "戊子": "霹雳火", "己丑": "霹雳火",
        "庚寅": "松柏木", "辛卯": "松柏木",
        "壬辰": "长流水", "癸巳": "长流水",
        "甲午": "砂中金", "乙未": "砂中金",
        "丙申": "山下火", "丁酉": "山下火",
        "戊戌": "平地木", "己亥": "平地木",

        "庚子": "壁上土", "辛丑": "壁上土",
        "壬寅": "金箔金", "癸卯": "金箔金",
        "甲辰": "覆灯火", "乙巳": "覆灯火",
        "丙午": "天河水", "丁未": "天河水",
        "戊申": "大驿土", "己酉": "大驿土",
        "庚戌": "钗钏金", "辛亥": "钗钏金",

        "壬子": "桑柘木", "癸丑": "桑柘木",
        "甲寅": "大溪水", "乙卯": "大溪水",
        "丙辰": "沙中土", "丁巳": "沙中土",
        "戊午": "天上火", "己未": "天上火",
        "庚申": "石榴木", "辛酉": "石榴木",
        "壬戌": "大海水", "癸亥": "大海水",
    }

    #########################
    #  神煞(示例)
    #########################
    # 以下仅以四种常见神煞(驿马、桃花、华盖、将星)为例，
    # 按“年支/日支三合局”简化判断：申子辰 -> ..., 亥卯未 -> ... etc.
    # 若需更全面，可结合干或更多神煞表。
    YIMA_RULE = {
        ("申", "子", "辰"): "寅",
        ("亥", "卯", "未"): "巳",
        ("寅", "午", "戌"): "申",
        ("巳", "酉", "丑"): "亥",
    }
    TAOHUA_RULE = {
        ("申", "子", "辰"): "酉",
        ("亥", "卯", "未"): "子",
        ("寅", "午", "戌"): "卯",
        ("巳", "酉", "丑"): "午",
    }
    HUAGAI_RULE = {
        ("申", "子", "辰"): "辰",
        ("亥", "卯", "未"): "未",
        ("寅", "午", "戌"): "戌",
        ("巳", "酉", "丑"): "丑",
    }
    JIANGXING_RULE = {
        ("申", "子", "辰"): "子",
        ("亥", "卯", "未"): "卯",
        ("寅", "午", "戌"): "午",
        ("巳", "酉", "丑"): "酉",
    }

    #########################
    #  60甲子旬 + 空亡
    #########################
    XUN_TABLE_60 = [
        {"name": "甲子旬", "list": ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳"], "kong": ["戌", "亥"]},
        {"name": "庚午旬", "list": ["庚午", "辛未", "壬申", "癸酉", "甲戌", "乙亥"], "kong": ["寅", "卯"]},
        {"name": "丙子旬", "list": ["丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳"], "kong": ["戌", "亥"]},
        {"name": "壬午旬", "list": ["壬午", "癸未", "甲申", "乙酉", "丙戌", "丁亥"], "kong": ["寅", "卯"]},
        {"name": "戊子旬", "list": ["戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳"], "kong": ["戌", "亥"]},
        {"name": "甲午旬", "list": ["甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥"], "kong": ["寅", "卯"]},
        {"name": "庚子旬", "list": ["庚子", "辛丑", "壬寅", "癸卯", "甲辰", "乙巳"], "kong": ["戌", "亥"]},
        {"name": "丙午旬", "list": ["丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥"], "kong": ["寅", "卯"]},
        {"name": "壬子旬", "list": ["壬子", "癸丑", "甲寅", "乙卯", "丙辰", "丁巳"], "kong": ["戌", "亥"]},
        {"name": "戊午旬", "list": ["戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥"], "kong": ["寅", "卯"]},
    ]




