import numpy as np
import pandas as pd 


if __name__ == "__main__":
    path = ""
    df = pd.read_csv(path)
    df = df[df["decision"] == "Accept (Poster)"]
    df = df[["title", "abstract"]]
    midpoint = len(df) // 2
    df['session'] = np.where(df.index < midpoint, 'Poster Session 1', 'Poster Session 2')
    df.to_json("icml_workshop_papers.json", orient="records")

